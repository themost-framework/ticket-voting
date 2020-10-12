import { Router } from 'express'
import { HttpNotFoundError, HttpBadRequestError, HttpTokenExpiredError, HttpTokenRequiredError, HttpConflictError, Guid } from '@themost/common';
import RegisterCandidateAction = require('../models/register-candidate-action-model');
import { EncryptionStrategy } from '@themost/web';
import VoteAccessToken = require('../models/vote-access-token-model');
import ElectionEvent = require('../models/election-event-model');

export function voteRouter(): Router {
  const router = Router();

  router.get('/Candidates', async (req, res, next) => {
    try {
      const electionEvent = await ElectionEvent.getCurrent(req.context);
      if (electionEvent == null) {
        return res.json([]);
      }
      const result = await electionEvent.getCandidates();
      return res.json(result);
    } catch (err) {
      return next(err);
    }


  });
  router.post('/Vote', async (req, res, next) => {
    try {
      const electionEvent = await ElectionEvent.getCurrent(req.context);
      if (electionEvent == null) {
        throw new HttpNotFoundError();
      }
      // validate election
      const now = new Date().getTime();
      const validFrom = electionEvent.specification && electionEvent.specification.validFrom && new Date(electionEvent.specification.validFrom).getTime() || 0;
      const validThrough = electionEvent.specification && electionEvent.specification.validThrough && new Date(electionEvent.specification.validThrough).getTime() || 0;
      let valid = now >= validFrom && now <= validThrough;
      if (!valid) {
        throw Object.assign(new HttpConflictError('Election period has been passed.'), {
          code: 'ERR_ELECTION_PERIOD'
        });
      }
      const votes = req.body;
      // validate votes
      const validCandidates = await electionEvent.getCandidates();
      votes.forEach(vote => {
        const find = validCandidates.findIndex((validCandidate) => {
          return validCandidate.id === vote.id;
        });
        if (find < 0) {
          throw Object.assign(new HttpConflictError('Candidate cannot be found.'), {
            code: 'ERR_CANDIDATE'
          });
        }
      });
      // validate votes length
      valid = votes.length >= (electionEvent.specification && electionEvent.specification.minimumSelection || 0) && votes.length <= (electionEvent.specification && electionEvent.specification.maximumSelection || 0);
      if (!valid) {
        throw Object.assign(new HttpConflictError('Invalid vote selection.'), {
          code: 'ERR_VOTE_SELECTION'
        });
      }
      // create envelop
      const envelope = Guid.newGuid().toString().replace(/\-/g, '');
      await new Promise((resolve, reject) => {
        req.context.db.executeInTransaction((cb) => {
          const newVotes = votes.map((vote) => {
            return {
              envelope: envelope,
              candidate: vote.id
            };
          });
          req.context.model('VoteAction').silent().save(newVotes).then(() => {
            // destroy token
            const access_token = (<any>req.context).user.authenticationToken;
            return req.context.model('AccessToken')
              .where('access_token').equal(access_token)
              .silent().getItem().then((token) => {
                if (token == null) {
                  return cb(new HttpTokenRequiredError());
                }
                token.expires = new Date(0);
                return req.context.model('AccessToken').silent().save(token).then(() => {
                  return cb();
                });
              });
          }).catch((err) => {
            return cb(err);
          })
        }, (err) => {
          if (err) {
            return reject(err);
          }
          return resolve();
        })
      });
      return res.json({
        ok: true
      });
    } catch (err) {
      return next(err);
    }


  });
  router.get('/', async (req, res, next) => {
    const result = await ElectionEvent.getCurrent(req.context);
    if (result == null) {
      return res.status(204).send();
    }
    return res.json(result);
  });
  return router;
}
