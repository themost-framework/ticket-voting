import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import QuantitativeValue = require('./quantitative-value-model');

/**
 * @class
 */
@EdmMapping.entityType('BroadcastFrequencySpecification')
class BroadcastFrequencySpecification extends DataObject {

    public broadcastFrequencyValue?: QuantitativeValue|any;
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

export = BroadcastFrequencySpecification;
