import {EdmMapping,EdmType} from '@themost/data/odata';
import Thing = require('./thing-model');
import ActionStatusType = require('./action-status-type-model');
import EntryPoint = require('./entry-point-model');
import Party = require('./party-model');
import Person = require('./person-model');
import Place = require('./place-model');

/**
 * @class
 */
@EdmMapping.entityType('Action')
class Action extends Thing {

    public result?: Thing|any; 
    public actionStatus?: ActionStatusType|any; 
    public target?: EntryPoint|any; 
    public agent?: Party|any; 
    public startTime?: Date; 
    public endTime?: Date; 
    public instrument?: Thing|any; 
    public participant?: Person|any; 
    public object?: Thing|any; 
    public error?: Thing|any; 
    public location?: Place|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Action;
