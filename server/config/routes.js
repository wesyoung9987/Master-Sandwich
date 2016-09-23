var userHandler = require('../handlers/userHandler.js');
var adventureHandler = require('../handlers/adventureHandler.js');

// export entire function to server.js
module.exports = function(app, express) {

  // TODO:
  // fill out api requests
  // direct to correct server method

  app.post('/api/signin', userHandler.signin);
  app.post('/api/signup', userHandler.signup);

}