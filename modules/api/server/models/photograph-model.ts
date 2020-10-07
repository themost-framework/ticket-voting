import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');

/**
 * @class
 */
@EdmMapping.entityType('Photograph')
class Photograph extends CreativeWork {

    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Photograph;
