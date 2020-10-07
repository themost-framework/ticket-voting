import {EdmMapping,EdmType} from '@themost/data/odata';
import MediaObject = require('./media-object-model');

/**
 * @class
 */
@EdmMapping.entityType('ImageObject')
class ImageObject extends MediaObject {

    public exifData?: string; 
    public representativeOfPage?: boolean; 
    public thumbnail?: ImageObject; 
    public caption?: MediaObject|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = ImageObject;
