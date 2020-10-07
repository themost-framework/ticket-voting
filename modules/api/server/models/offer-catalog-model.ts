import {EdmMapping,EdmType} from '@themost/data/odata';
import ItemList = require('./item-list-model');

/**
 * @class
 */
@EdmMapping.entityType('OfferCatalog')
class OfferCatalog extends ItemList {

    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = OfferCatalog;
