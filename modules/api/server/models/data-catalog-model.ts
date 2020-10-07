import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import Dataset = require('./dataset-model');

/**
 * @class
 */
@EdmMapping.entityType('DataCatalog')
class DataCatalog extends CreativeWork {

    public dataset?: Dataset|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = DataCatalog;
