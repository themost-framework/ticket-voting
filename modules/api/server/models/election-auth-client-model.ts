import { EdmMapping, EdmType } from '@themost/data/odata';
import AuthClient = require('./auth-client-model');
import ElectionEvent = require('./election-event-model');

/**
 * @class
 */
@EdmMapping.entityType('ElectionAuthClient')
class ElectionAuthClient extends AuthClient {

  public electionEvent?: ElectionEvent | any;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = ElectionAuthClient;
