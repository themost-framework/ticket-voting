import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import QuantitativeValue = require('./quantitative-value-model');

/**
 * @class
 */
@EdmMapping.entityType('PriceSpecification')
class PriceSpecification extends StructuredValue {

    public minPrice?: number;
    public eligibleTransactionVolume?: PriceSpecification;
    public maxPrice?: number;
    public priceCurrency?: string;
    public eligibleQuantity?: QuantitativeValue|any;
    public validFrom?: Date;
    public validThrough?: Date;
    public price?: string;
    public valueAddedTaxIncluded?: boolean;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = PriceSpecification;
