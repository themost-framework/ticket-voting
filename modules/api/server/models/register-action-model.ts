import {EdmMapping,EdmType} from '@themost/data/odata';
import InteractAction = require('./interact-action-model');

/**
 * @class
 */
@EdmMapping.entityType('RegisterAction')
class RegisterAction extends InteractAction {

    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = RegisterAction;
