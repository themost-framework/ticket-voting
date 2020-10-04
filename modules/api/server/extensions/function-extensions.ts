import { FunctionContext } from '@themost/data';

class FunctionContextExtension extends FunctionContext {
  async newIdentifier() {
    if (this.model) {
      let identifier = await this.chars(8);
      let exists = await this.model.where('identifier').equal(identifier).silent().count();
      while (exists) {
        identifier = await this.chars(8);
        exists = await this.model.where('identifier').equal(identifier).silent().count();
      }
      return identifier;
    }
  }
}
// extend FunctionContext
Object.assign(FunctionContext.prototype, {
  newIdentifier: FunctionContextExtension.prototype.newIdentifier
});
