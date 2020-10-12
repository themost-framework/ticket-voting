import { ApplicationService, TraceUtils } from "@themost/common";
import { getMailer } from '@themost/mailer';
import { ExpressDataContext } from "@themost/express";
import ElectionAuthClient = require("../models/election-auth-client-model");
import AccessToken = require("../models/access-token-model");
import ElectionEvent = require("../models/election-event-model");

class SendElectionMessageService extends ApplicationService {
  constructor(app: any) {
    super(app);
  }
  /**
   * Send a token to allow voting for the specified election event
   * @param context
   * @param election
   * @param recipients
   */
  async send(context: ExpressDataContext, election: ElectionEvent, recipients: Array<string>) {
    // save token
    const origin = context.getConfiguration().getSourceAt('settings/app/origin');
    // send message
    const subject = <string>(election.name);
    const applyURL = new URL(`/#/events/${election.identifier}/candidates/apply`, origin);
    const result = {
      sent: <Array<string>>[],
      failed: <Array<string>>[]
    }
    for (const recipient of recipients) {
      try {
        await new Promise((resolve, reject) => {
          const mailer = getMailer(context);
          mailer.template('send-election-message')
            .subject(subject)
            .to(recipient)
            .send({
              model: {
                electionEvent: election,
                url: applyURL
              }
            }, (err) => {
              if (err) {
                return reject(err);
              }
              return resolve();
            });
        });
        result.sent.push(recipient);

      } catch (err) {
        result.failed.push(recipient);
        TraceUtils.error(err);
      }
    }
    return result;
  }
}

export {
  SendElectionMessageService
}
