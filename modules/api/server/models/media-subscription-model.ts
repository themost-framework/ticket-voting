import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import Organization = require('./organization-model');
import Offer = require('./offer-model');

/**
 * @class
 */
@EdmMapping.entityType('MediaSubscription')
class MediaSubscription extends DataObject {

    public authenticator?: Organization|any;
    public expectsAcceptanceOf?: Offer|any;
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

export = MediaSubscription;
