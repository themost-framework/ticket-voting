import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import ItemList = require('./item-list-model');
import Answer = require('./answer-model');

/**
 * @class
 */
@EdmMapping.entityType('Question')
class Question extends CreativeWork {

    public answerCount?: number; 
    public acceptedAnswer?: ItemList|any; 
    public upvoteCount?: number; 
    public suggestedAnswer?: Answer|any; 
    public downvoteCount?: number; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Question;
