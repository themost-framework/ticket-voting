import {EdmMapping,EdmType} from '@themost/data/odata';
import Party = require('./party-model');
import Place = require('./place-model');
import GenderType = require('./gender-type-model');
import Organization = require('./organization-model');
import EducationalOrganization = require('./educational-organization-model');
import ContactPoint = require('./contact-point-model');
import Country = require('./country-model');

/**
 * @class
 */
@EdmMapping.entityType('Person')
class Person extends Party {

    public colleagues?: Array<Person>; 
    public workLocation?: Place|any; 
    public children?: Array<Person>; 
    public jobTitle?: string; 
    public birthPlace?: Place|any; 
    public gender?: GenderType|any; 
    public memberOf?: Organization|any; 
    public alumniOf?: EducationalOrganization|any; 
    public homeLocation?: ContactPoint|any; 
    public birthDate?: Date; 
    public givenName?: string; 
    public familyName?: string; 
    public honorificPrefix?: string; 
    public additionalName?: string; 
    public siblings?: Array<Person>; 
    public affiliation?: Organization|any; 
    public honorificSuffix?: string; 
    public nationality?: Country|any; 
    public follows?: Array<Person>; 
    public knows?: Array<Person>; 
    public worksFor?: Array<Organization|any>; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Person;
