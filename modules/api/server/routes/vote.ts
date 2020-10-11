import { Router } from 'express'
import { HttpNotFoundError, HttpBadRequestError, HttpTokenExpiredError, HttpTokenRequiredError } from '@themost/common';
import RegisterCandidateAction = require('../models/register-candidate-action-model');
import { EncryptionStrategy } from '@themost/web';
import VoteAccessToken = require('../models/vote-access-token-model');
import ElectionEvent = require('../models/election-event-model');

export function voteRouter(): Router {
  const router = Router();

  router.get('/ElectionEvents/Current/Candidates', async (req, res, next) => {
    const electionEvent = await ElectionEvent.getCurrent(req.context);
    if (electionEvent == null) {
      return res.json([]);
    }
    const result = await electionEvent.getCandidates();
    return res.json(result);
  });
  router.post('/ElectionEvents/Current/Vote', (req, res, next) => {
    return next(new Error('Not implemented yet'));
  });
  router.get('/ElectionEvents/Current', async (req, res, next) => {
    const result = await ElectionEvent.getCurrent(req.context);
    if (result == null) {
      return res.status(204).send();
    }
    return res.json(result);
  });
  return router;
}
