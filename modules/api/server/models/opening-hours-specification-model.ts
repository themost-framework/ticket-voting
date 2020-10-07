import { EdmMapping, EdmType } from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import DayOfWeek = require('./day-of-week-model');

/**
 * @class
 */
@EdmMapping.entityType('OpeningHoursSpecification')
class OpeningHoursSpecification extends StructuredValue {

  public validFrom?: Date;
  public validThrough?: Date;
  public opens?: any;
  public closes?: any;
  public dayOfWeek?: DayOfWeek | any;
  public id?: number;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = OpeningHoursSpecification;
