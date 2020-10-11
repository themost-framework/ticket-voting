import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');

/**
 * @class
 */
@EdmMapping.entityType('ElectionSpecification')
class ElectionSpecification extends StructuredValue {

    public minimumSelection?: number;
    public maximumSelection?: number;
    public validFrom?: Date;
    public validThrough?: Date;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = ElectionSpecification;
