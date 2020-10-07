import {EdmMapping,EdmType} from '@themost/data/odata';
import MediaObject = require('./media-object-model');

/**
 * @class
 */
@EdmMapping.entityType('DataDownload')
class DataDownload extends MediaObject {

    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = DataDownload;
