var Adventure = require('../models/Adventures.js');
var User = require('../models/Users.js');

// export entire object of methods to routes.js
module.exports = {


  pickAdventure: function(req, res){}, // GET

  forgetAdventure: function(req, res){}, // DELETE

  createAdventure:  function(req, res){}, // POST

  deleteAdventure:  function(req, res){}, // DELETE

  fetchAllAdventures: function(req, res){}, // GET

  fetchMyInProgressAdventures: function(req, res){}, // GET

  fetchMyCreatedAdventures: function(req, res){}, // GET

  fetchSingleRiddle: function(req, res){} // GET


};