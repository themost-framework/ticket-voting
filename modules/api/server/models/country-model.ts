import {EdmMapping,EdmType} from '@themost/data/odata';
import AdministrativeArea = require('./administrative-area-model');

/**
 * @class
 */
@EdmMapping.entityType('Country')
class Country extends AdministrativeArea {

    public official?: string; 
    public cca2?: string; 
    public cca3?: string; 
    public cioc?: string; 
    public currency?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Country;
