import {EdmMapping,EdmType} from '@themost/data/odata';
import Quantity = require('./quantity-model');

/**
 * @class
 */
@EdmMapping.entityType('Distance')
class Distance extends Quantity {

    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Distance;
