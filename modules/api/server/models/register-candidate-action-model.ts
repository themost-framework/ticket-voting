import { EdmMapping, EdmType } from '@themost/data/odata';
import RegisterAction = require('./register-action-model');
import ElectionEvent = require('./election-event-model');

/**
 * @class
 */
@EdmMapping.entityType('RegisterCandidateAction')
class RegisterCandidateAction extends RegisterAction {

  public electionEvent: ElectionEvent | any;
  public agreeTerms?: boolean;
  public agreeData?: boolean;
  public shareEmail?: boolean;
  public id?: number;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
}

export = RegisterCandidateAction;
