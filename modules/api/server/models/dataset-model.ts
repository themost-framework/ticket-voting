import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import DataCatalog = require('./data-catalog-model');
import DataDownload = require('./data-download-model');

/**
 * @class
 */
@EdmMapping.entityType('Dataset')
class Dataset extends CreativeWork {

    public includedInDataCatalog?: DataCatalog|any; 
    public datasetTimeInterval?: Date; 
    public issn?: string; 
    public catalog?: DataCatalog|any; 
    public includedDataCatalog?: DataCatalog|any; 
    public distribution?: DataDownload|any; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = Dataset;
