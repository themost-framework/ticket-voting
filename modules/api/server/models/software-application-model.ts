import {EdmMapping,EdmType} from '@themost/data/odata';
import CreativeWork = require('./creative-work-model');
import ImageObject = require('./image-object-model');
import DataFeed = require('./data-feed-model');

/**
 * @class
 */
@EdmMapping.entityType('SoftwareApplication')
class SoftwareApplication extends CreativeWork {

    public downloadUrl?: string; 
    public softwareRequirements?: string; 
    public permissions?: string; 
    public processorRequirements?: string; 
    public availableOnDevice?: string; 
    public featureList?: string; 
    public applicationSubCategory?: string; 
    public device?: string; 
    public applicationCategory?: string; 
    public softwareVersion?: string; 
    public storageRequirements?: string; 
    public applicationSuite?: string; 
    public memoryRequirements?: string; 
    public screenshot?: ImageObject|any; 
    public countriesSupported?: string; 
    public softwareHelp?: CreativeWork|any; 
    public softwareAddOn?: SoftwareApplication; 
    public releaseNotes?: string; 
    public supportingData?: Array<DataFeed|any>; 
    public requirements?: string; 
    public countriesNotSupported?: string; 
    public operatingSystem?: string; 
    public fileSize?: string; 
    public installUrl?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = SoftwareApplication;
