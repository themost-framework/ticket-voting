import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import Person = require('./person-model');
import CreativeWorkSeries = require('./creative-work-series-model');
import Episode = require('./episode-model');
import CreativeWorkSeason = require('./creative-work-season-model');

/**
 * @class
 */
@EdmMapping.entityType('Clip')
class Clip extends CreativeWork {

    public actor?: Person|any; 
    public partOfSeries?: Array<CreativeWorkSeries|any>; 
    public partOfEpisode?: Episode|any; 
    public partOfSeason?: CreativeWorkSeason|any; 
    public musicBy?: Person|any; 
    public director?: Person|any; 
    public clipNumber?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Clip;
