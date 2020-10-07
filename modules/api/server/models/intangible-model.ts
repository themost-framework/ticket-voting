import { EdmMapping, EdmType } from '@themost/data/odata';
import Thing = require('./thing-model');

/**
 * @class
 */
@EdmMapping.entityType('Intangible')
class Intangible extends Thing {

  public id?: number;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = Intangible;
