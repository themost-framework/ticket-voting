import {EdmMapping,EdmType} from '@themost/data/odata';
import Thing = require('./thing-model');
import PostalAddress = require('./postal-address-model');

/**
 * @class
 */
@EdmMapping.entityType('Party')
class Party extends Thing {

    public sponsor?: Party; 
    public taxID?: string; 
    public address?: PostalAddress|any; 
    public email?: string; 
    public telephone?: string; 
    public vatID?: string; 
    public awards?: Array<string>; 
    public faxNumber?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Party;
