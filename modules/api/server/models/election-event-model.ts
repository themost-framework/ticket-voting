import { EdmMapping, EdmType } from '@themost/data/odata';
import Event = require('./event-model');
import { ExpressDataContext } from '@themost/express';
import ElectionAuthClient = require('./election-auth-client-model');
import RegisterCandidateAction = require('./register-candidate-action-model');
import ElectionSpecification = require('./election-specification-model');

/**
 * @class
 */
@EdmMapping.entityType('ElectionEvent')
class ElectionEvent extends Event {

  public id?: number;
  public specification?: ElectionSpecification;
  public subEvents?: any[];
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  @EdmMapping.func('get', 'ElectionEvent')
  static async get(context: ExpressDataContext, code: string) {
    return await context.model('ElectionEvent').where('code').equal(code).silent().getItem();
  }

  static async getCurrent(context: ExpressDataContext): Promise<ElectionEvent> {
    // get client_id
    const client_id = (<any>context.user).authenticationClient;
    // get current election
    const id = await context.model(ElectionAuthClient)
      .where('client_id').equal(client_id)
      .select('electionEvent')
      .silent()
      .value();
    return await context.model(ElectionEvent)
      .where('id').equal(id)
      .expand('specification', {
        name: 'subEvents',
        options: {
          '$expand': 'specification'
        }
      })
      .silent().getTypedItem();
  }

  async getCandidates(): Promise<any> {
    return await this.context.model(RegisterCandidateAction)
      .where('electionEvent').equal(this.getId())
      .and('actionStatus/alternateName').equal('CompletedActionStatus')
      .select(
        'id',
        'object/familyName as candidateFamilyName',
        'object/givenName as candidateGivenName',
        'shortDescription'
      )
      .orderBy('object/familyName')
      .thenBy('object/givenName')
      .silent()
      .getAllItems();
  }

  async getSubCandidates(): Promise<any> {
    return await this.context.model(RegisterCandidateAction)
      .where('electionEvent/superEvent').equal(this.getId())
      .and('actionStatus/alternateName').equal('CompletedActionStatus')
      .select(
        'id',
        'object/familyName as candidateFamilyName',
        'object/givenName as candidateGivenName',
        'shortDescription',
        'electionEvent'
      )
      .orderBy('object/familyName')
      .thenBy('object/givenName')
      .silent()
      .getAllItems();
  }

}

export = ElectionEvent;
