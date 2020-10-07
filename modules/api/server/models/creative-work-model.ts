import {EdmMapping,EdmType} from '@themost/data/odata';
import Thing = require('./thing-model');
import AlignmentObject = require('./alignment-object-model');
import MediaObject = require('./media-object-model');
import Person = require('./person-model');
import Organization = require('./organization-model');
import Audience = require('./audience-model');
import Clip = require('./clip-model');
import PublicationEvent = require('./publication-event-model');
import Place = require('./place-model');
import AggregateRating = require('./aggregate-rating-model');
import ItemList = require('./item-list-model');
import Demand = require('./demand-model');
import Event = require('./event-model');
import InteractionCounter = require('./interaction-counter-model');
import Product = require('./product-model');
import Comment = require('./comment-model');
import Review = require('./review-model');

/**
 * @class
 */
@EdmMapping.entityType('CreativeWork')
class CreativeWork extends Thing {

    public about?: Thing; 
    public accessibilitySummary?: string; 
    public educationalAlignment?: AlignmentObject; 
    public associatedMedia?: MediaObject; 
    public funder?: Person; 
    public sponsor?: Organization; 
    public workExample?: CreativeWork; 
    public provider?: Organization; 
    public encoding?: MediaObject; 
    public interactivityType?: string; 
    public character?: Person; 
    public audience?: Audience; 
    public sourceOrganization?: Organization; 
    public isPartOf?: string; 
    public video?: Clip; 
    public publication?: PublicationEvent; 
    public text?: string; 
    public expires?: Date; 
    public contributor?: Person; 
    public publisher?: Organization; 
    public typicalAgeRange?: string; 
    public position?: number; 
    public releasedEvent?: PublicationEvent; 
    public educationalUse?: string; 
    public contentLocation?: Place; 
    public schemaVersion?: string; 
    public accessibilityFeature?: string; 
    public aggregateRating?: AggregateRating; 
    public locationCreated?: Place; 
    public accessModeSufficient?: ItemList; 
    public temporalCoverage?: Date; 
    public accountablePerson?: Person; 
    public spatialCoverage?: Place; 
    public offers?: Array<Demand>; 
    public editor?: Person; 
    public discussionUrl?: string; 
    public award?: string; 
    public copyrightHolder?: Person; 
    public accessibilityHazard?: string; 
    public copyrightYear?: number; 
    public recordedAt?: Event; 
    public spatial?: Place; 
    public commentCount?: number; 
    public fileFormat?: string; 
    public inLanguage?: string; 
    public temporal?: Date; 
    public accessibilityAPI?: string; 
    public interactionStatistic?: InteractionCounter; 
    public contentRating?: string; 
    public learningResourceType?: string; 
    public accessMode?: string; 
    public material?: string; 
    public isFamilyFriendly?: boolean; 
    public exampleOfWork?: CreativeWork; 
    public version?: string; 
    public mainEntity?: Thing; 
    public genre?: string; 
    public keywords?: string; 
    public author?: Organization; 
    public isBasedOnUrl?: Product; 
    public alternativeHeadline?: string; 
    public timeRequired?: string; 
    public translator?: Organization; 
    public thumbnailUrl?: string; 
    public hasPart?: CreativeWork; 
    public comment?: Comment; 
    public encodingFormat?: string; 
    public review?: Review; 
    public license?: CreativeWork; 
    public accessibilityControl?: string; 
    public headline?: string; 
    public isBasedOn?: string; 
    public creator?: Person; 
    public publishingPrinciples?: Array<CreativeWork>; 
    public producer?: Organization; 
    public mentions?: Array<Thing>; 
    public datePublished?: Date; 
    public isAccessibleForFree?: boolean; 
    public citation?: string; 
    public id?: number; 
    /**
     * @constructor
     */
    constructor() {
        super();
    }
}

export = CreativeWork;
