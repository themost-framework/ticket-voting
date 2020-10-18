import { DataEventArgs, DataObjectState } from "@themost/data";
import { getMailer } from '@themost/mailer';
import RegisterCandidateAction = require("../models/register-candidate-action-model");
import { HttpNotFoundError, DataError, DataNotFoundError } from "@themost/common";
import { ExpressDataContext } from "@themost/express";
import { EncryptionStrategy } from '@themost/web';
async function beforeSaveAsync(event: DataEventArgs) {
  if (event.state !== DataObjectState.Insert) {
    return;
  }
  // get object
  const object = event.target.object;
  if (object != null) {
    // try to save person
    const context = event.model.context;
    if (event.target.electionEvent == null) {
      throw new DataError('E_ELECTION_REQUIRED', 'Election cannot be empty at this context', '', 'RegisterCandidateAction', 'electionEvent');
    }
    const electionEvent = context.model('ElectionEvent').convert(event.target.electionEvent);
    // validate RegiserCandidateAction
    const exists = await context.model('RegisterCandidateAction')
      .where('object/address/email').equal(object.address.email)
      .and('electionEvent').equal(electionEvent.getId())
      .and('actionStatus/alternateName').notEqual('CancelledActionStatus')
      .silent()
      .count();
    if (exists) {
      throw Object.assign(new DataError('E_CANDIDATE_EXISTS', 'Candidacy already exists', '', 'RegisterCandidateAction', 'object'), {
        status: 409.1
      });
    }
    const person = await context.model('Person').where('address/email').equal(object.address.email).silent().getItem();
    if (person == null) {
      // and save
      await context.model('Person').silent().save(object);
    }
  }
}

export function beforeSave(event: DataEventArgs, callback: any) {
  beforeSaveAsync(event).then(() => {
    return callback();
  }).catch((err) => {
    return callback(err);
  });
}

async function afterSaveAsync(event: DataEventArgs) {
  // send mail after
  if (event.state !== DataObjectState.Insert) {
    return;
  }
  const context = <ExpressDataContext>event.model.context;
  const data = await context.model(RegisterCandidateAction)
    .where('id').equal(event.target.id)
    .expand('object', 'electionEvent')
    .levels(2)
    .silent()
    .getItem();
  if (data == null) {
    throw new HttpNotFoundError('Target action cannot be found or is inaccessible.');
  }
  const encyptedIdentifier = context.getApplication().getService<EncryptionStrategy>(<any>EncryptionStrategy).encrypt(data.identifier);
  const origin = context.getApplication().getConfiguration().getSourceAt('settings/app/origin');
  const url = new URL(`/client/callback/confirm.html?code=${encyptedIdentifier}`, origin);
  Object.assign(data, {
    url: url
  });
  return await new Promise((resolve, reject) => {
    getMailer(context)
      .template('confirm-register-candidate')
      .subject(data.electionEvent.name)
      .to(data.object.address.email)
      .send({
        model: data
      }, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
  });


}

export function afterSave(event: DataEventArgs, callback: any) {
  afterSaveAsync(event).then(() => {
    return callback();
  }).catch((err) => {
    return callback(err);
  });
}
