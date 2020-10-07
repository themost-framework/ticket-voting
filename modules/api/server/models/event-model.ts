import {EdmMapping,EdmType} from '@themost/data/odata';
import Thing = require('./thing-model');
import Person = require('./person-model');
import Organization = require('./organization-model');
import CreativeWork = require('./creative-work-model');
import Audience = require('./audience-model');
import AggregateRating = require('./aggregate-rating-model');
import Demand = require('./demand-model');
import EventStatusType = require('./event-status-type-model');
import Review = require('./review-model');
import Place = require('./place-model');

/**
 * @class
 */
@EdmMapping.entityType('Event')
class Event extends Thing {

    public about?: Thing|any;
    public funder?: Person|any;
    public sponsor?: Organization|any;
    public subEvent?: Event;
    public workFeatured?: CreativeWork|any;
    public audience?: Audience|any;
    public remainingAttendeeCapacity?: number;
    public actor?: Person|any;
    public endDate?: Date;
    public doorTime?: any;
    public contributor?: Person|any;
    public maximumAttendeeCapacity?: number;
    public typicalAgeRange?: string;
    public organizer?: Person|any;
    public aggregateRating?: AggregateRating|any;
    public offers?: Array<Demand|any>;
    public inLanguage?: string;
    public attendee?: Person|any;
    public workPerformed?: CreativeWork|any;
    public eventStatus?: EventStatusType|any;
    public startDate?: Date;
    public director?: Person|any;
    public superEvent?: Event;
    public duration?: string;
    public translator?: Organization|any;
    public previousStartDate?: Date;
    public review?: Review|any;
    public location?: Place|any;
    public recordedIn?: CreativeWork|any;
    public composer?: Organization|any;
    public isAccessibleForFree?: boolean;
    public performer?: Person|any;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Event;
