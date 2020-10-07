import {EdmMapping,EdmType} from '@themost/data/odata';
import Dataset = require('./dataset-model');

/**
 * @class
 */
@EdmMapping.entityType('DataFeed')
class DataFeed extends Dataset {

    public dataFeedElement?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = DataFeed;
