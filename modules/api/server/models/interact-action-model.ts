import {EdmMapping,EdmType} from '@themost/data/odata';
import Action = require('./action-model');

/**
 * @class
 */
@EdmMapping.entityType('InteractAction')
class InteractAction extends Action {

    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = InteractAction;
