var express = require('express');
var middleware = require('./config/middleware.js');
var routes = require('./config/routes.js');

// start express server
var app = express();

// set middleware
middleware(app, express);

//set routes
routes(app, express);

// export app to index.js
module.exports = app;