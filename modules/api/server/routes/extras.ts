import { Router } from 'express'
import { HttpNotFoundError, HttpBadRequestError } from '@themost/common';
import RegisterCandidateAction = require('../models/register-candidate-action-model');
import { EncryptionStrategy } from '@themost/web';

export function extraRouter(): Router {
  const router = Router();
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
