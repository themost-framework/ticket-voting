import {EdmMapping,EdmType} from '@themost/data/odata';
import Place = require('./place-model');

/**
 * @class
 */
@EdmMapping.entityType('AdministrativeArea')
class AdministrativeArea extends Place {

    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = AdministrativeArea;
