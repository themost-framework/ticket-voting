import {EdmMapping,EdmType} from '@themost/data/odata';
import Service = require('./service-model');
import BroadcastFrequencySpecification = require('./broadcast-frequency-specification-model');
import Organization = require('./organization-model');
import Place = require('./place-model');
import BroadcastChannel = require('./broadcast-channel-model');

/**
 * @class
 */
@EdmMapping.entityType('BroadcastService')
class BroadcastService extends Service {

    public broadcastFrequency?: BroadcastFrequencySpecification|any;
    public broadcastTimezone?: string;
    public broadcastAffiliateOf?: Organization|any;
    public videoFormat?: string;
    public parentService?: BroadcastService;
    public broadcastDisplayName?: string;
    public area?: Place|any;
    public hasBroadcastChannel?: BroadcastChannel|any;
    public inLanguage?: string;
    public broadcaster?: Organization|any;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = BroadcastService;
