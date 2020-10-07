import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import Distance = require('./distance-model');
import MediaSubscription = require('./media-subscription-model');
import Place = require('./place-model');
import QuantitativeValue = require('./quantitative-value-model');
import NewsArticle = require('./news-article-model');
import Organization = require('./organization-model');

/**
 * @class
 */
@EdmMapping.entityType('MediaObject')
class MediaObject extends CreativeWork {

    public startTime?: Date; 
    public uploadDate?: Date; 
    public playerType?: string; 
    public height?: Distance|any; 
    public bitrate?: string; 
    public requiresSubscription?: MediaSubscription|any; 
    public regionsAllowed?: Place|any; 
    public endTime?: Date; 
    public contentSize?: string; 
    public embedUrl?: string; 
    public width?: QuantitativeValue|any; 
    public contentUrl?: string; 
    public associatedArticle?: NewsArticle|any; 
    public productionCompany?: Organization|any; 
    public duration?: string; 
    public encodesCreativeWork?: CreativeWork|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = MediaObject;
