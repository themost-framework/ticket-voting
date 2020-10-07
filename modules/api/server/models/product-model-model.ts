import {EdmMapping,EdmType} from '@themost/data/odata';
import Product = require('./product-model');

/**
 * @class
 */
@EdmMapping.entityType('ProductModel')
class ProductModel extends Product {

    public predecessorOf?: ProductModel; 
    public successorOf?: ProductModel; 
    public isVariantOf?: ProductModel; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = ProductModel;
