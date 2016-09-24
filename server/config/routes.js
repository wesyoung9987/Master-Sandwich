var userHandler = require('../handlers/userHandler.js');
var adventureHandler = require('../handlers/adventureHandler.js');
var helper = require('./helpers.js');
var jwt = require('jwt-simple');


// export entire function to server.js
module.exports = function(app, express) {

  // TODO:
  // fill out api requests
  // direct to correct server method

  app.post('/api/signin', userHandler.signin);
  app.post('/api/signup', userHandler.signup);

  app.post('/api/pickAd', adventureHandler.pickAdventure);
  app.delete('/api/forgetAd', adventureHandler.forgetAdventure);
  app.post('/api/createAd', adventureHandler.createAdventure);
  app.delete('/api/deleteAd', adventureHandler.deleteAdventure);
  app.get('/api/fetchAll', helper.checkJWT, adventureHandler.fetchAllAdventures);
  app.get('/api/fetchMine/:id', adventureHandler.fetchMyInProgressAdventures);
  app.get('/api/fetchCreated/:id', adventureHandler.fetchMyCreatedAdventures);
  app.get('/api/fetchRiddle', adventureHandler.fetchSingleRiddle);

  // just for testing
  app.get('/api/test', function(req, res){
    var token = req.headers['x-access-token']
    var user = jwt.decode(token, 'secret');
    console.log("USER: ", user);
    res.json({user: user});
  })

};