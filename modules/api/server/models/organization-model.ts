import {EdmMapping,EdmType} from '@themost/data/odata';
import Party = require('./party-model');
import Person = require('./person-model');
import Place = require('./place-model');

/**
 * @class
 */
@EdmMapping.entityType('Organization')
class Organization extends Party {

    public subOrganization?: Organization; 
    public globalLocationNumber?: string; 
    public memberOf?: Organization; 
    public members?: Array<Person|any>; 
    public founders?: Array<Person|any>; 
    public dissolutionDate?: Date; 
    public logo?: string; 
    public employees?: Array<Person|any>; 
    public department?: Organization; 
    public legalName?: string; 
    public foundingDate?: Date; 
    public location?: Place|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Organization;
