import {EdmMapping,EdmType} from '@themost/data/odata';
import Organization = require('./organization-model');
import Person = require('./person-model');

/**
 * @class
 */
@EdmMapping.entityType('EducationalOrganization')
class EducationalOrganization extends Organization {

    public alumni?: Array<Person|any>; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = EducationalOrganization;
