var express = require('express');
var middleware = require('./config/middleware.js');
var routes = require('./config/routes.js');

// start express server
var app = express();

// set middleware
middleware(app);

//set routes
routes(app);

// export app to index.js
module.exports = app;