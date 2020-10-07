import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import QuantitativeValue = require('./quantitative-value-model');
import WarrantyScope = require('./warranty-scope-model');

/**
 * @class
 */
@EdmMapping.entityType('WarrantyPromise')
class WarrantyPromise extends StructuredValue {

    public durationOfWarranty?: QuantitativeValue|any;
    public warrantyScope?: WarrantyScope|any;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = WarrantyPromise;
