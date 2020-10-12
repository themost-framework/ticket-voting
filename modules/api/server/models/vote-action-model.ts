import { EdmMapping, EdmType } from '@themost/data/odata';

import { DataObject } from '@themost/data/data-object';

import RegisterCandidateAction = require('./register-candidate-action-model');

/**
 * @class
 */
@EdmMapping.entityType('VoteAction')
class VoteAction extends DataObject {

  public id?: number;
  public envelope?: string;
  public candidate?: any;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = VoteAction;
