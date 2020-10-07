import {EdmMapping,EdmType} from '@themost/data/odata';
import Rating = require('./rating-model');
import Thing = require('./thing-model');

/**
 * @class
 */
@EdmMapping.entityType('AggregateRating')
class AggregateRating extends Rating {

    public itemReviewed?: Thing|any;
    public reviewCount?: number;
    public ratingCount?: number;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = AggregateRating;
