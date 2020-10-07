import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import AdministrativeArea = require('./administrative-area-model');

/**
 * @class
 */
@EdmMapping.entityType('Audience')
class Audience extends DataObject {

    public audienceType?: string;
    public geographicArea?: AdministrativeArea|any;
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

export = Audience;
