import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import PropertyValue = require('./property-value-model');
import QualitativeValue = require('./qualitative-value-model');

/**
 * @class
 */
@EdmMapping.entityType('QuantitativeValue')
class QuantitativeValue extends StructuredValue {

    public minValue?: number;
    public value?: StructuredValue|any;
    public additionalProperty?: PropertyValue|any;
    public valueReference?: QualitativeValue|any;
    public maxValue?: number;
    public unitCode?: string;
    public unitText?: string;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = QuantitativeValue;
