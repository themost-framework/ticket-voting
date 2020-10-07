import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import Question = require('./question-model');

/**
 * @class
 */
@EdmMapping.entityType('Comment')
class Comment extends CreativeWork {

    public upvoteCount?: number; 
    public parentItem?: Question|any; 
    public downvoteCount?: number; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Comment;
