import { EdmMapping, EdmType } from '@themost/data/odata';
import Event = require('./event-model');
import { ExpressDataContext } from '@themost/express';

/**
 * @class
 */
@EdmMapping.entityType('ElectionEvent')
class ElectionEvent extends Event {

  public id?: number;
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  @EdmMapping.func('get', 'ElectionEvent')
  static async get(context: ExpressDataContext, code: string) {
    return await context.model('ElectionEvent').where('code').equal(code).silent().getItem();
  }

}

export = ElectionEvent;
