import {EdmMapping,EdmType} from '@themost/data/odata';
import Comment = require('./comment-model');

/**
 * @class
 */
@EdmMapping.entityType('Answer')
class Answer extends Comment {

    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Answer;
