import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import SpeakableSpecification = require('./speakable-specification-model');

/**
 * @class
 */
@EdmMapping.entityType('Article')
class Article extends CreativeWork {

    public pagination?: string; 
    public speakable?: SpeakableSpecification|any; 
    public pageEnd?: number; 
    public articleSection?: string; 
    public wordCount?: number; 
    public articleBody?: string; 
    public pageStart?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Article;
