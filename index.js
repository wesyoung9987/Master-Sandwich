var app = require('./server/server.js');
var mongoose = require('mongoose');

// set mongoURI (env variable name may be different for AWS)
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/treasuretrek';

// connect to the db
mongoose.connect(mongoURI);

// set port
var port = process.env.PORT || 1337;

// listen on port
app.listen(port);

console.log("Server is listening on port " + port);
