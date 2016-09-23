var app = require('./server/server.js');
var mongoose = require('mongoose');

// set mongoURI (env variable name may be different for AWS)
<<<<<<< 2fc9e6d700e20c145c1ee42c94584cc418bf2a6d
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/treasuretrek';

// connect to the db
// uncomment when db is ready
// mongoose.connect(mongoURI);
=======
var mongoURI = process.evn.MONGODB_URI || 'mongodb://localhost/treasuretrek';

// connect to the db
mongoose.connect(mongoURI);
>>>>>>> index server file set up

// set port
var port = process.env.PORT || 1337;

// listen on port
<<<<<<< 2fc9e6d700e20c145c1ee42c94584cc418bf2a6d
app.listen(port);
=======
app.list(port);
>>>>>>> index server file set up

console.log("Server is listening on port " + port);