import {EdmMapping,EdmType} from '@themost/data/odata';
import Article = require('./article-model');

/**
 * @class
 */
@EdmMapping.entityType('NewsArticle')
class NewsArticle extends Article {

    public printColumn?: string; 
    public printEdition?: string; 
    public printSection?: string; 
    public printPage?: string; 
    public dateline?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = NewsArticle;
