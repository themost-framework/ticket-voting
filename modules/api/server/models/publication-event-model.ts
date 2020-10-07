import {EdmMapping,EdmType} from '@themost/data/odata';
import Event = require('./event-model');
import BroadcastService = require('./broadcast-service-model');

/**
 * @class
 */
@EdmMapping.entityType('PublicationEvent')
class PublicationEvent extends Event {

    public publishedOn?: BroadcastService|any; 
    public free?: boolean; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = PublicationEvent;
