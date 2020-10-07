import {EdmMapping,EdmType} from '@themost/data/odata';
import Service = require('./service-model');

/**
 * @class
 */
@EdmMapping.entityType('CableOrSatelliteService')
class CableOrSatelliteService extends Service {

    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = CableOrSatelliteService;
