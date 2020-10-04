
const api = require('./modules/api/dist/server/app')
module.exports = {
  devServer: {
    before(app, server) {
      app.use('/server', api);
    }
  }
};
