import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import BroadcastFrequencySpecification = require('./broadcast-frequency-specification-model');
import CableOrSatelliteService = require('./cable-or-satellite-service-model');
import BroadcastService = require('./broadcast-service-model');

/**
 * @class
 */
@EdmMapping.entityType('BroadcastChannel')
class BroadcastChannel extends DataObject {

    public broadcastFrequency?: BroadcastFrequencySpecification|any;
    public broadcastChannelId?: string;
    public broadcastServiceTier?: string;
    public inBroadcastLineup?: CableOrSatelliteService|any;
    public providesBroadcastService?: BroadcastService|any;
    public genre?: string;
    public id?: number;
    public sameAs?: string;
    public url?: string;
    public image?: string;
    public additionalType?: string;
    public name?: string;
    public identifier?: string;
    public description?: string;
    public disambiguatingDescription?: string;
    public alternateName?: string;
    public dateCreated?: Date;
    public dateModified?: Date;
    public createdBy?: number;
    public modifiedBy?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = BroadcastChannel;
