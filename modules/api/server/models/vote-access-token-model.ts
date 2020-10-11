import { EdmMapping, EdmType } from '@themost/data/odata';
import AccessToken = require('./access-token-model');
import ElectionEvent = require('./election-event-model');
import { EncryptionStrategy } from '@themost/web';
import { ExpressDataContext } from '@themost/express';

/**
 * @class
 */
@EdmMapping.entityType('VoteAccessToken')
class VoteAccessToken extends AccessToken {

  public electionEvent?: ElectionEvent | any;
  public access_token?: string;
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  static async get(context: ExpressDataContext, code: string): Promise<VoteAccessToken> {
    const decryptedToken = context.getApplication().getService<EncryptionStrategy>(<any>EncryptionStrategy).decrypt(code);
    return await context.model(VoteAccessToken)
      .where('access_token').equal(decryptedToken)
      .silent()
      .getTypedItem();
  }

}

export = VoteAccessToken;
