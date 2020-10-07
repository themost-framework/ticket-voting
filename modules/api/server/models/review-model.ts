import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import Rating = require('./rating-model');
import Thing = require('./thing-model');

/**
 * @class
 */
@EdmMapping.entityType('Review')
class Review extends CreativeWork {

    public reviewRating?: Rating|any; 
    public itemReviewed?: Thing|any; 
    public reviewBody?: string; 
    public reviewAspect?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Review;
