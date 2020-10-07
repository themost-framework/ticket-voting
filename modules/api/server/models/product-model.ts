import {EdmMapping,EdmType} from '@themost/data/odata';
import Thing = require('./thing-model');
import Organization = require('./organization-model');
import Audience = require('./audience-model');
import Distance = require('./distance-model');
import AggregateRating = require('./aggregate-rating-model');
import Demand = require('./demand-model');
import QuantitativeValue = require('./quantitative-value-model');
import PropertyValue = require('./property-value-model');
import ProductModel = require('./product-model-model');
import Review = require('./review-model');
import OfferItemCondition = require('./offer-item-condition-model');

/**
 * @class
 */
@EdmMapping.entityType('Product')
class Product extends Thing {

    public manufacturer?: Organization|any; 
    public sku?: string; 
    public audience?: Audience|any; 
    public mpn?: string; 
    public height?: Distance|any; 
    public gtin8?: string; 
    public aggregateRating?: AggregateRating|any; 
    public isConsumableFor?: Product; 
    public offers?: Array<Demand|any>; 
    public award?: string; 
    public category?: Thing|any; 
    public width?: QuantitativeValue|any; 
    public additionalProperty?: PropertyValue|any; 
    public isAccessoryOrSparePartFor?: Product; 
    public logo?: string; 
    public gtin14?: string; 
    public gtin13?: string; 
    public gtin12?: string; 
    public material?: string; 
    public weight?: QuantitativeValue|any; 
    public depth?: QuantitativeValue|any; 
    public isSimilarTo?: Product; 
    public model?: ProductModel|any; 
    public color?: string; 
    public isRelatedTo?: Product; 
    public productID?: string; 
    public review?: Review|any; 
    public purchaseDate?: Date; 
    public itemCondition?: OfferItemCondition|any; 
    public productionDate?: Date; 
    public slogan?: string; 
    public brand?: Organization|any; 
    public releaseDate?: Date; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Product;
