import { Router } from 'express'
import { HttpNotFoundError, HttpBadRequestError, HttpTokenExpiredError, HttpTokenRequiredError } from '@themost/common';
import RegisterCandidateAction = require('../models/register-candidate-action-model');
import { EncryptionStrategy } from '@themost/web';
import VoteAccessToken = require('../models/vote-access-token-model');
import VoteAction = require('../models/vote-action-model');
import { groupBy } from 'rxjs/internal/operators/groupBy';

export function extraRouter(): Router {
  const router = Router();
  router.get("/ElectionEvents/:identifier/Results", async (req, res, next) => {
    try {
      const event = await req.context.model('ElectionEvent').where('identifier').equal(req.params.identifier).silent().getTypedItem();
      if (event == null) {
        return next(new HttpNotFoundError("The specified event cannot be found"));
      }
      const envelopes = await req.context.model(VoteAction).select('envelope')
        .groupBy('envelope')
        .where('candidate/electionEvent/identifier').equal(req.params.identifier)
        .silent()
        .count();
      const votes = await req.context.model(VoteAction)
        .select('count(id) as total', 'candidate', 'candidate/object/familyName as candidateFamilyName', 'candidate/object/givenName as candidateGivenName')
        .groupBy('candidate', 'candidate/object/familyName', 'candidate/object/givenName')
        .where('candidate/electionEvent/identifier').equal(req.params.identifier)
        .silent()
        .getAllItems();
      // get all candidates in order to show candidates without records
      const candidates = await event.getCandidates();
      for (const candidate of candidates) {
        if (votes.find((item) => item.candidate === candidate.id) == null) {
          votes.push({
            total: 0,
            candidate: candidate.id,
            candidateFamilyName: candidate.candidateFamilyName,
            candidateGivenName: candidate.candidateGivenName,
            electionEvent: candidate.electionEvent
          });
        }
      }
      return res.json({
        voters: envelopes,
        votes: votes
      });
    } catch (err) {
      return next(err);
    }

  });

  router.get("/ElectionEvents/:identifier/SubResults", async (req, res, next) => {
    try {
      const event = await req.context.model('ElectionEvent').where('identifier').equal(req.params.identifier).silent().getTypedItem();
      if (event == null) {
        return next(new HttpNotFoundError("The specified event cannot be found"));
      }
      const envelopes = await req.context.model(VoteAction).select('envelope')
        .groupBy('envelope')
        .where('candidate/electionEvent/superEvent/identifier').equal(req.params.identifier)
        .silent()
        .count();
      const votes = await req.context.model(VoteAction)
        .select(
          'count(id) as total', 'candidate', 'candidate/object/familyName as candidateFamilyName', 'candidate/object/givenName as candidateGivenName',
          'candidate/electionEvent as electionEvent'
        )
        .groupBy('candidate', 'candidate/object/familyName',
          'candidate/object/givenName', 'candidate/electionEvent')
        .where('candidate/electionEvent/superEvent/identifier').equal(req.params.identifier)
        .silent()
        .getAllItems();
      // get all candidates in order to show candidates without records
      const candidates = await event.getSubCandidates();
      for (const candidate of candidates) {
        if (votes.find((item) => item.candidate === candidate.id) == null) {
          votes.push({
            total: 0,
            candidate: candidate.id,
            candidateFamilyName: candidate.candidateFamilyName,
            candidateGivenName: candidate.candidateGivenName,
            electionEvent: candidate.electionEvent
          });
        }
      }
      return res.json({
        voters: envelopes,
        votes: votes
      });
    } catch (err) {
      return next(err);
    }

  });

  router.post("/ElectionEvents/:identifier/Candidates/Apply", async (req, res, next) => {
    try {
      const event = await req.context.model('ElectionEvent').where('identifier').equal(req.params.identifier).silent().getItem();
      if (event == null) {
        return next(new HttpNotFoundError("The specified event cannot be found"));
      }
      const body = req.body;
      await req.context.model(RegisterCandidateAction).save(body);
      return res.json(body);
    }
    catch (err) {
      return next(err);
    }
  });

  router.post("/ElectionEvents/Candidates/Confirm", async (req, res, next) => {
    try {
      if (req.body.code == null) {
        throw new HttpBadRequestError('Register action code is missing or is inaccessible');
      }
      // decrypt identifier
      const decryptedIdentifier = req.context.getApplication().getService<EncryptionStrategy>(<any>EncryptionStrategy).decrypt(req.body.code);
      const action = await req.context.model(RegisterCandidateAction)
        .where('identifier').equal(decryptedIdentifier)
        .expand('object', 'electionEvent')
        .levels(2)
        .silent()
        .getItem();

      if (action == null) {
        return next(new HttpNotFoundError("The specified register action cannot be found."));
      }
      // set completed
      action.actionStatus = {
        alternateName: 'CompletedActionStatus'
      };
      req.context.model(RegisterCandidateAction).silent().save(action);
      return res.json(action);
    }
    catch (err) {
      return next(err);
    }
  });

  router.post("/ElectionEvents/Candidates/Validate", async (req, res, next) => {
    try {
      if (req.body.code == null) {
        throw new HttpBadRequestError('Register action code is missing or is inaccessible');
      }
      // decrypt identifier
      const decryptedIdentifier = req.context.getApplication().getService<EncryptionStrategy>(<any>EncryptionStrategy).decrypt(req.body.code);
      const action = await req.context.model(RegisterCandidateAction)
        .where('identifier').equal(decryptedIdentifier)
        .expand('actionStatus', 'object', 'electionEvent')
        .levels(2)
        .silent()
        .getItem();
      if (action == null) {
        return next(new HttpNotFoundError("The specified register action cannot be found."));
      }
      return res.json(action);
    }
    catch (err) {
      return next(err);
    }
  });
  return router;
}
