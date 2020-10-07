import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';import PropertyValue = require('./property-value-model');

/**
 * @class
 */
@EdmMapping.entityType('QualitativeValue')
class QualitativeValue extends DataObject {

    public greater?: QualitativeValue;
    public equal?: QualitativeValue;
    public nonEqual?: QualitativeValue;
    public additionalProperty?: PropertyValue|any;
    public lesser?: QualitativeValue;
    public valueReference?: QualitativeValue;
    public lesserOrEqual?: QualitativeValue;
    public greaterOrEqual?: QualitativeValue;
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

export = QualitativeValue;
