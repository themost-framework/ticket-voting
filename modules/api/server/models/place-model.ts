import {EdmMapping,EdmType} from '@themost/data/odata';
import Thing = require('./thing-model');
import Photograph = require('./photograph-model');
import Review = require('./review-model');
import PostalAddress = require('./postal-address-model');
import GeoCoordinates = require('./geo-coordinates-model');

/**
 * @class
 */
@EdmMapping.entityType('Place')
class Place extends Thing {

    public photo?: Photograph|any; 
    public globalLocationNumber?: string; 
    public maximumAttendeeCapacity?: number; 
    public reviews?: Array<Review|any>; 
    public photos?: Array<Photograph|any>; 
    public map?: string; 
    public branchCode?: string; 
    public address?: PostalAddress|any; 
    public logo?: string; 
    public telephone?: string; 
    public geo?: GeoCoordinates|any; 
    public publicAccess?: boolean; 
    public containsPlace?: Array<Place>; 
    public faxNumber?: string; 
    public isAccessibleForFree?: boolean; 
    public containedIn?: Place; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Place;
