import * as app from '../server/app';
import { ExpressDataApplication, ExpressDataContext } from '@themost/express';
import { TestUtils } from './utils.spec';
import ElectionEvent = require('../server/models/election-event-model');
import RegisterCandidateAction = require('../server/models/register-candidate-action-model');
import ActionStatusType = require('../server/models/action-status-type-model');
describe("RegisterCandidateAction", () => {
  let context: ExpressDataContext;
  beforeEach((done) => {
    const app1: ExpressDataApplication = app.get(ExpressDataApplication.name);
    context = app1.createContext();
    return done();
  });
  afterEach((done) => {
    context.finalize(() => {
      return done();
    });
  });
  fit("should register candidate", async () => {
    await TestUtils.executeInTransaction(context, async () => {

      const newElection = {
        "name": "Sample Election",
        "startDate": "2020-10-10 16:00:00.000+02:00",
        "endDate": "2020-10-10 21:00:00.000+02:00"
      };
      await context.model(ElectionEvent).silent().save(newElection);

      const actionStatus = await context.model(ActionStatusType).find({
        "alternateName": "PotentialActionStatus"
      }).getItem();

      const newItem = {
        "description": null,
        "agreeTerms": true,
        "agreeData": true,
        "shareEmail": false,
        "electionEvent": newElection,
        "actionStatus": actionStatus,
        "object": {
          "givenName": "Kyriakos",
          "familyName": "Barbounakis",
          "address": {
            "email": "k.barbounakis@gmail.com",
          },
          "jobTitle": null
        }
      };
      await context.model(RegisterCandidateAction).save(newItem);
      let item: RegisterCandidateAction = await context.model(RegisterCandidateAction)
        .where('id').equal((<any>newItem).id)
        .expand('object', 'electionEvent')
        .silent()
        .levels(2)
        .getItem();
      expect(item).toBeTruthy();

    });
  });
});
