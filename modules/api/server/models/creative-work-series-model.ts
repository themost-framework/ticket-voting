import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';
/**
 * @class
 */
@EdmMapping.entityType('CreativeWorkSeries')
class CreativeWorkSeries extends DataObject {

    public endDate?: Date; 
    public issn?: string; 
    public startDate?: Date; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = CreativeWorkSeries;
