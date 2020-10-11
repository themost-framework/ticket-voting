import * as express from 'express';
import { Strategy as LocalStrategy } from 'passport-local';
import { createHash } from 'crypto';
import { HttpForbiddenError, HttpTokenRequiredError, HttpNotFoundError, HttpTokenExpiredError } from '@themost/common';
import { DataContext } from '@themost/data';
import { ParamsDictionary, Query } from 'express-serve-static-core';
import { ExpressDataContext } from '@themost/express';
import * as BearerStrategy from 'passport-http-bearer';
import AccessToken = require('../models/access-token-model');
/**
 * @param {passport.PassportStatic} passport
 */
function authRouter(passport) {
  // local strategy example
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
  },
    function (req, username, password, done) {
      // query users by name
      return req.context.model('User').where('name').equal(username)
        .silent()
        .getItem().then(user => {
          // if user cannot be found
          if (user == null) {
            return done(null, false);
          }
          // query user credentials by user identifier and password
          return req.context.model('UserCredential')
            .where('id').equal(user.id).prepare()
            .and('userPassword').equal(`{clear}${password}`)
            .or('userPassword').equal(`'{md5}'${createHash('md5').update(password).digest('hex')}`)
            .or('userPassword').equal(`'{sha1}'${createHash('sha1').update(password).digest('hex')}`)
            .silent()
            .count().then(exists => {
              // if ser password is correct
              if (exists) {
                // validate that user is enabled
                if (!user.enabled) {
                  return done(new HttpForbiddenError('User account is disabled'));
                }
                // return user
                return done(null, user);
              }
              return done(null, false);
            });
        }).catch(err => {
          return done(err);
        });
    }
  ));

  // passport bearer authorization strategy
  // https://github.com/jaredhanson/passport-http-bearer#usage
  passport.use(new BearerStrategy({
    session: false,
    passReqToCallback: true
  },
    /**
     * @param {Request} req
     * @param {string} token
     * @param {Function} done
     */
    function (req: Express.Request, token: string, done: (err?: any, result?: any) => void) {
      /**
       * Gets OAuth2 client services
       * @type {*}
       */
      if (token == null) {
        // throw 499 Token Required error
        return done(new HttpTokenRequiredError());
      }
      // get token info
      AccessToken.inspect(req.context, token).then((info: any) => {
        // end log token info request
        if (info == null) {
          // the specified token cannot be found - 498 invalid token with specific code
          return done(new HttpTokenExpiredError());
        }
        if (info.active === false) {
          // the specified token cannot be found - 498 invalid token with specific code
          return done(new HttpTokenExpiredError());
        }
        // find user from token info
        return req.context.model('User').where('name').equal(info.username).silent().getItem().then(user => {
          // user cannot be found and of course cannot be authenticated (throw forbidden error)
          if (user == null) {
            user = {
              name: 'anonymous'
            };
          }
          // otherwise return user data
          return done(null, {
            "name": user.name,
            "authenticationProviderKey": user.id,
            "authenticationType": 'Bearer',
            "authenticationToken": token,
            "authenticationClient": info.client_id,
            "authenticationScope": info.scope
          });
        });
      }).catch(err => {
        return done(err);
      });
    }
  ));

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
  let router = express.Router();

  router.use(passport.initialize());

  router.use(passport.session());

  router.use((req, res, next) => {
    if (typeof req.user === 'undefined') {
      req.user = {
        name: 'anonymous'
      };
    }
    return next();
  });

  router.get('/login', (req, res) => {
    if (req.user && req.user.name !== 'anonymous') {
      res.redirect('/');
    }
    res.render('login');
  });

  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    });

  router.post("/token/inspect", async (req, res, next) => {
    try {
      if (req.body.code == null) {
        throw new HttpTokenRequiredError('Access token is required');
      }
      // decrypt identifier
      const token = await AccessToken.inspect(req.context, req.body.code)
      if (token == null) {
        return next(new HttpNotFoundError("Invalid access token."));
      }
      return res.json({
        active: !token.isExpired(),
        username: token.user_id,
        access_token: token.access_token,
        refresh_token: token.refresh_token,
        scope: token.scope
      });
    }
    catch (err) {
      return next(err);
    }
  });

  return router;
}

export {
  authRouter
};
