var userHandler = require('../handlers/userHandler.js');
var adventureHandler = require('../handlers/adventureHandler.js');
var helper = require('./helpers.js');
var jwt = require('jwt-simple');


// export entire function to server.js
module.exports = function(app) {


  app.post('/api/signin', userHandler.signin);
  app.post('/api/signup', userHandler.signup);

  app.get('/api/topScores/:num', helpwer.checkJWT, userHandler.fetchTopScores);
  app.get('/api/myInfo', helper.checkJWT, userHandler.fetchMyInfo);
  app.put('/api/savePhoto', helper.checkJWT, userHandler.savePhoto);

  app.post('/api/pickAd', helper.checkJWT, adventureHandler.pickAdventure);
  app.delete('/api/forgetAd', helper.checkJWT, adventureHandler.forgetAdventure);
  app.post('/api/createAd', helper.checkJWT, adventureHandler.createAdventure);
  app.delete('/api/deleteAd', helper.checkJWT, adventureHandler.deleteAdventure);
  app.get('/api/fetchAll', helper.checkJWT, adventureHandler.fetchAllAdventures);
  app.get('/api/fetchMine', helper.checkJWT, adventureHandler.fetchMyInProgressAdventures);
  app.get('/api/fetchCreated', helper.checkJWT, adventureHandler.fetchMyCreatedAdventures);
  app.get('/api/fetchRiddle', helper.checkJWT, adventureHandler.fetchSingleRiddle);
  app.put('/api/updateProgress', helper.checkJWT, adventureHandler.updateProgress);


};