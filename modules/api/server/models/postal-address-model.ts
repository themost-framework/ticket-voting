import {EdmMapping,EdmType} from '@themost/data/odata';
import ContactPoint = require('./contact-point-model');
import Country = require('./country-model');

/**
 * @class
 */
@EdmMapping.entityType('PostalAddress')
class PostalAddress extends ContactPoint {

    public postOfficeBoxNumber?: string;
    public streetAddress?: string;
    public addressCountry?: Country|any;
    public addressRegion?: string;
    public postalCode?: string;
    public addressLocality?: string;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = PostalAddress;
