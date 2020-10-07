import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import Audience = require('./audience-model');
import AdministrativeArea = require('./administrative-area-model');
import Thing = require('./thing-model');
import Organization = require('./organization-model');
import OfferCatalog = require('./offer-catalog-model');
import OpeningHoursSpecification = require('./opening-hours-specification-model');
import AggregateRating = require('./aggregate-rating-model');
import Demand = require('./demand-model');
import Person = require('./person-model');
import Product = require('./product-model');
import ServiceChannel = require('./service-channel-model');
import Review = require('./review-model');

/**
 * @class
 */
@EdmMapping.entityType('Service')
class Service extends DataObject {

    public serviceAudience?: Audience|any;
    public serviceArea?: AdministrativeArea|any;
    public produces?: Array<Thing|any>;
    public provider?: Organization|any;
    public areaServed?: string;
    public audience?: Audience|any;
    public hasOfferCatalog?: OfferCatalog|any;
    public hoursAvailable?: OpeningHoursSpecification|any;
    public providerMobility?: string;
    public aggregateRating?: AggregateRating|any;
    public offers?: Array<Demand|any>;
    public award?: string;
    public category?: Thing|any;
    public broker?: Person|any;
    public serviceOutput?: Thing|any;
    public logo?: string;
    public isSimilarTo?: Product|any;
    public isRelatedTo?: Product|any;
    public availableChannel?: ServiceChannel|any;
    public review?: Review|any;
    public serviceType?: string;
    public slogan?: string;
    public brand?: Organization|any;
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

export = Service;
