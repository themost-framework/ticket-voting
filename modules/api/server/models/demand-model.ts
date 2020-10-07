import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import DeliveryMethod = require('./delivery-method-model');
import PriceSpecification = require('./price-specification-model');
import QuantitativeValue = require('./quantitative-value-model');
import Place = require('./place-model');
import WarrantyPromise = require('./warranty-promise-model');
import Person = require('./person-model');
import TypeAndQuantityNode = require('./type-and-quantity-node-model');
import ItemAvailability = require('./item-availability-model');
import BusinessEntityType = require('./business-entity-type-model');
import OfferItemCondition = require('./offer-item-condition-model');
import Event = require('./event-model');
import PaymentMethod = require('./payment-method-model');
import BusinessFunction = require('./business-function-model');

/**
 * @class
 */
@EdmMapping.entityType('Demand')
class Demand extends DataObject {

    public sku?: string;
    public availabilityStarts?: Date;
    public availableDeliveryMethod?: DeliveryMethod|any;
    public areaServed?: string;
    public mpn?: string;
    public serialNumber?: string;
    public gtin8?: string;
    public priceSpecification?: PriceSpecification|any;
    public inventoryLevel?: QuantitativeValue|any;
    public eligibleTransactionVolume?: PriceSpecification|any;
    public availableAtOrFrom?: Place|any;
    public warranty?: WarrantyPromise|any;
    public eligibleQuantity?: QuantitativeValue|any;
    public validFrom?: Date;
    public validThrough?: Date;
    public gtin14?: string;
    public gtin13?: string;
    public gtin12?: string;
    public seller?: Person|any;
    public deliveryLeadTime?: QuantitativeValue|any;
    public availabilityEnds?: Date;
    public includesObject?: TypeAndQuantityNode|any;
    public availability?: ItemAvailability|any;
    public eligibleCustomerType?: BusinessEntityType|any;
    public itemCondition?: OfferItemCondition|any;
    public itemOffered?: Event|any;
    public eligibleDuration?: QuantitativeValue|any;
    public acceptedPaymentMethod?: PaymentMethod|any;
    public businessFunction?: BusinessFunction|any;
    public eligibleRegion?: string;
    public advanceBookingRequirement?: QuantitativeValue|any;
    public id?: number;
    public sameAs?: string;
    public url?: string;
    public image?: string;
    public additionalType?: string;
    public name?: string;
    public identifier?: string;
    public description?: string;
    public disambiguatingDescription?: string;
    public alternateName?: string;
    public dateCreated?: Date;
    public dateModified?: Date;
    public createdBy?: number;
    public modifiedBy?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Demand;
