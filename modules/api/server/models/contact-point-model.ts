import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');

/**
 * @class
 */
@EdmMapping.entityType('ContactPoint')
class ContactPoint extends StructuredValue {

    public id?: number;
    public faxNumber?: string;
    public telephone?: string;
    public email?: string;
    public contactType?: string;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = ContactPoint;
