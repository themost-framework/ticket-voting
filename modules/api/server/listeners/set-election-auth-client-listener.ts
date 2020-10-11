import { DataEventArgs, DataObjectState } from "@themost/data";
import ElectionAuthClient = require("../models/election-auth-client-model");

async function afterSaveAsync(event: DataEventArgs) {
  // send mail after
  if (event.state !== DataObjectState.Insert) {
    return;
  }
  // insert auth client for this election event
  const context = event.model.context;
  const origin: string = context.getConfiguration().getSourceAt('settings/app/origin');
  await context.model(ElectionAuthClient).silent().save({
    name: 'Authorization client for an election',
    electionEvent: event.target,
    redirect_uri: /\/$/.test(origin) ? origin.concat('*') : origin.concat('/*')
  });
}

export function afterSave(event: DataEventArgs, callback: any) {
  afterSaveAsync(event).then(() => {
    return callback();
  }).catch((err) => {
    return callback(err);
  });
}
