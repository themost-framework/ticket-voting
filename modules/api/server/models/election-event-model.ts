import { EdmMapping, EdmType } from '@themost/data/odata';
import Event = require('./event-model');
import { ExpressDataContext } from '@themost/express';
import ElectionAuthClient = require('./election-auth-client-model');
import RegisterCandidateAction from './register-candidate-action-model';

/**
 * @class
 */
@EdmMapping.entityType('ElectionEvent')
class ElectionEvent extends Event {

  public id?: number;
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
      .expand('specification')
      .silent().getTypedItem();
  }

  async getCandidates(): Promise<any> {
    return await this.context.model(RegisterCandidateAction)
      .where('electionEvent').equal(this.getId())
      .and('actionStatus/alternateName').equal('CompletedActionStatus')
      .expand('object')
      .select(
        'id',
        'object',
        'description'
      )
      .expand('object')
      .silent()
      .getAllItems();
  }

}

export = ElectionEvent;
