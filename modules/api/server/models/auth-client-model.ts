import { EdmMapping, EdmType } from '@themost/data/odata';

import { DataObject } from '@themost/data/data-object';
/**
 * @class
 */
@EdmMapping.entityType('AuthClient')
class AuthClient extends DataObject {

  public client_id?: string;
  public name?: string;
  public client_secret?: string;
  public redirect_uri?: string;
  public grant_type?: string;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = AuthClient;
