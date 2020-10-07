import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import Person = require('./person-model');
import CreativeWorkSeries = require('./creative-work-series-model');
import VideoObject = require('./video-object-model');
import Organization = require('./organization-model');
import Episode = require('./episode-model');

/**
 * @class
 */
@EdmMapping.entityType('CreativeWorkSeason')
class CreativeWorkSeason extends CreativeWork {

    public actor?: Person|any; 
    public partOfSeries?: Array<CreativeWorkSeries|any>; 
    public numberOfEpisodes?: number; 
    public trailer?: VideoObject|any; 
    public endDate?: Date; 
    public startDate?: Date; 
    public director?: Person|any; 
    public productionCompany?: Organization|any; 
    public episode?: Episode|any; 
    public seasonNumber?: number; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = CreativeWorkSeason;
