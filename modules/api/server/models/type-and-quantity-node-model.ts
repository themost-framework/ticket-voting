import { EdmMapping, EdmType } from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import Service = require('./service-model');
import BusinessFunction = require('./business-function-model');

/**
 * @class
 */
@EdmMapping.entityType('TypeAndQuantityNode')
class TypeAndQuantityNode extends StructuredValue {

  public typeOfGood?: Service | any;
  public amountOfThisGood?: number;
  public unitCode?: string;
  public unitText?: string;
  public businessFunction?: BusinessFunction | any;
  public id?: number;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = TypeAndQuantityNode;
