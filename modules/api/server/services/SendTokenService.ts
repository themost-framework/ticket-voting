import { ApplicationService } from "@themost/common";
import { getMailer } from '@themost/mailer';
import { ExpressDataContext } from "@themost/express";
import ElectionAuthClient = require("../models/election-auth-client-model");
import AccessToken = require("../models/access-token-model");
import ElectionEvent = require("../models/election-event-model");

class SendTokenService extends ApplicationService {
  constructor(app: any) {
    super(app);
  }
  /**
   * Send a token to allow voting for the specified election event
   * @param context
   * @param election
   * @param recipient
   */
  async send(context: ExpressDataContext, election: ElectionEvent, recipient: string) {
    // save token
    let electionClient = await context.model(ElectionAuthClient)
      .where('electionEvent').equal(election.id)
      .silent()
      .getItem();
    const origin = context.getConfiguration().getSourceAt('settings/app/origin');
    if (electionClient == null) {
      // create election client
      electionClient = {
        name: 'Authorization client for an election',
        electionEvent: election,
        redirect_uri: /\/$/.test(origin) ? origin.concat('*') : origin.concat('/*')
      }
      await context.model(ElectionAuthClient).silent().save(electionClient);
    }
    // get specification for election
    const specification = await context.model(ElectionEvent)
      .where('id').equal(election.id).select('specification').expand('specification')
      .silent().value();
    // add token
    const newToken = {
      "client_id": electionClient.client_id,
      "user_id": recipient,
      "scope": "vote",
      "expires": specification.validThrough
    };
    await context.model(AccessToken).silent().save(newToken);
    // send message
    const mailer = getMailer(context);
    const subject = <string>(election.name);
    const access_token = (<any>newToken).access_token;
    const state = encodeURIComponent('/events/current/vote');
    const tokenURL = new URL(`/client/callback/index.html?access_token=${access_token}&state=${state}`, origin);
    const overviewURL = new URL(`/#/events/${election.identifier}/overview`, origin);
    await new Promise((resolve, reject) => {
      mailer.template('send-token')
        .subject(subject)
        .to(recipient)
        .send({
          model: {
            electionEvent: election,
            url: tokenURL,
            overviewUrl: overviewURL
          }
        }, (err) => {
          if (err) {
            return reject(err);
          }
          return resolve();
        });
    });
  }
}

export {
  SendTokenService
}
