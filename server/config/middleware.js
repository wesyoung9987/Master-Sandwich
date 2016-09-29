var morgan = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');

// export entire function to server.js
module.exports = function(app) {

  // apply morgan to display server interactions in terminal
  app.use(morgan('dev'));

  // apply bodyParser
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // use express.static to server client folder
  app.use(express.static(__dirname + '/../../client'));
  // QUESTION:  is this still true for mobile apps?

};