import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import Organization = require('./organization-model');

/**
 * @class
 */
@EdmMapping.entityType('Rating')
class Rating extends DataObject {

    public ratingValue?: string;
    public bestRating?: number;
    public author?: Organization|any;
    public worstRating?: string;
    public reviewAspect?: string;
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

export = Rating;
