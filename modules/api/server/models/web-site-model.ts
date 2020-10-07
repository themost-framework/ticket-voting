import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');

/**
 * @class
 */
@EdmMapping.entityType('WebSite')
class WebSite extends CreativeWork {

    public issn?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = WebSite;
