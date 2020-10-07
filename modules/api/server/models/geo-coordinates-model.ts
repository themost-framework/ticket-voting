import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import PostalAddress = require('./postal-address-model');
import Country = require('./country-model');

/**
 * @class
 */
@EdmMapping.entityType('GeoCoordinates')
class GeoCoordinates extends StructuredValue {

    public latitude?: number;
    public longitude?: number;
    public address?: PostalAddress|any;
    public addressCountry?: Country|any;
    public postalCode?: string;
    public elevation?: string;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = GeoCoordinates;
