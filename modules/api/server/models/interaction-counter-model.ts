import {EdmMapping,EdmType} from '@themost/data/odata';
import StructuredValue = require('./structured-value-model');
import WebSite = require('./web-site-model');
import Action = require('./action-model');

/**
 * @class
 */
@EdmMapping.entityType('InteractionCounter')
class InteractionCounter extends StructuredValue {

    public interactionService?: WebSite|any;
    public userInteractionCount?: number;
    public interactionType?: Action|any;
    public id?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = InteractionCounter;
