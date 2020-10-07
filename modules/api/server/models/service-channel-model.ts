import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import Service = require('./service-model');
import Place = require('./place-model');
import PostalAddress = require('./postal-address-model');
import ContactPoint = require('./contact-point-model');

/**
 * @class
 */
@EdmMapping.entityType('ServiceChannel')
class ServiceChannel extends DataObject {

    public providesService?: Service|any;
    public serviceLocation?: Place|any;
    public servicePostalAddress?: PostalAddress|any;
    public availableLanguage?: string;
    public serviceUrl?: string;
    public servicePhone?: ContactPoint|any;
    public serviceSmsNumber?: ContactPoint|any;
    public processingTime?: string;
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

export = ServiceChannel;
