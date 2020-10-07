import { EdmMapping, EdmType } from '@themost/data/odata';
import Intangible = require('./intangible-model');

/**
 * @class
 */
@EdmMapping.entityType('StructuredValue')
class StructuredValue extends Intangible {

  public id?: number;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = StructuredValue;
