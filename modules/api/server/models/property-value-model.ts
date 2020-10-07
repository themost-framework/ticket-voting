import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import QualitativeValue = require('./qualitative-value-model');

/**
 * @class
 */
@EdmMapping.entityType('PropertyValue')
class PropertyValue extends StructuredValue {

    public minValue?: number;
    public propertyID?: string;
    public value?: StructuredValue|any;
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

export = PropertyValue;
