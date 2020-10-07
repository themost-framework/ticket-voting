import {EdmMapping,EdmType} from '@themost/data/odata';
import MediaObject = require('./media-object-model');
import Person = require('./person-model');
import ImageObject = require('./image-object-model');

/**
 * @class
 */
@EdmMapping.entityType('VideoObject')
class VideoObject extends MediaObject {

    public actor?: Person|any; 
    public videoFrameSize?: string; 
    public musicBy?: Person|any; 
    public videoQuality?: string; 
    public director?: Person|any; 
    public transcript?: string; 
    public thumbnail?: ImageObject|any; 
    public caption?: MediaObject|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = VideoObject;
