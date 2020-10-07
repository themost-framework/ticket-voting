import {EdmMapping,EdmType} from '@themost/data/odata';

import {DataObject} from '@themost/data/data-object';
/**
 * @class
 */
@EdmMapping.entityType('ItemList')
class ItemList extends DataObject {

    public itemListElement?: string;
    public itemListOrder?: string;
    public numberOfItems?: number;
    public id?: number;
    public sameAs?: string;
    public url?: string;
    public image?: string;
    public additionalType?: string;
    public name?: string;
    public identifier?: string;
    public description?: string;
    public disambiguatingDescription?: string;
    public alternateName?: string;
    public dateCreated?: Date;
    public dateModified?: Date;
    public createdBy?: number;
    public modifiedBy?: number;
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = ItemList;
