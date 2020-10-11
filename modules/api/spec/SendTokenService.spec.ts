import * as app from '../server/app';
import { SendTokenService } from '../server/services/SendTokenService';
import { ExpressDataContext, ExpressDataApplication } from '@themost/express';
import ElectionEvent = require('../server/models/election-event-model');

describe('SendTokenService', () => {
  let context: ExpressDataContext;
  beforeEach((done) => {
    const app1: ExpressDataApplication = app.get(ExpressDataApplication.name);
    app1.useService(<any>SendTokenService);
    context = app1.createContext();
    return done();
  });
  afterEach((done) => {
    context.finalize(() => {
      return done();
    });
  });
  fit("should send tokens", async () => {
    const service: SendTokenService = context.getApplication().getService(<any>SendTokenService);
    const election = await context.model(ElectionEvent)
      .where('identifier').equal('8hg7ENdfVpN')
      .silent()
      .getItem();
    for (let index = 0; index < 10; index++) {
      await service.send(context, election, `voter${index}@example.com`);
    }
  });

});
