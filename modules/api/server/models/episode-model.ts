import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import Person = require('./person-model');
import CreativeWorkSeries = require('./creative-work-series-model');
import VideoObject = require('./video-object-model');
import CreativeWorkSeason = require('./creative-work-season-model');
import Organization = require('./organization-model');

/**
 * @class
 */
@EdmMapping.entityType('Episode')
class Episode extends CreativeWork {

    public actor?: Person|any; 
    public partOfSeries?: Array<CreativeWorkSeries|any>; 
    public trailer?: VideoObject|any; 
    public partOfSeason?: CreativeWorkSeason|any; 
    public musicBy?: Person|any; 
    public episodeNumber?: number; 
    public director?: Person|any; 
    public productionCompany?: Organization|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Episode;
