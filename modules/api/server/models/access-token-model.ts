import { EdmMapping, EdmType } from '@themost/data/odata';

import { DataObject } from '@themost/data/data-object';
import { ExpressDataContext } from '@themost/express';
/**
 * @class
 */
@EdmMapping.entityType('AccessToken')
class AccessToken extends DataObject {

  public access_token?: string;
  public client_id?: string;
  public user_id?: string;
  public expires?: Date;
  public refresh_token?: string;
  public scope?: string;
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  static async inspect(context: ExpressDataContext, access_token: string): Promise<any> {
    const token = await context.model(AccessToken)
      .where('access_token').equal(access_token)
      .silent()
      .getTypedItem();
    if (token == null) {
      return {
        active: false
      }
    }
    return {
      active: !token.isExpired(),
      username: token.user_id,
      client_id: token.client_id,
      access_token: token.access_token,
      refresh_token: token.refresh_token,
      scope: token.scope
    };
  }

  isExpired() {
    if (this.expires == null) {
      return true;
    }
    return (new Date(this.expires)).getTime() < (new Date()).getTime();
  }

}

export = AccessToken;
