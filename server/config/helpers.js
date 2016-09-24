var jwt = require('jwt-simple');


// export entire object of methods
module.exports = {

  sendError: function(err, req, res){
    res.status(500).send({error: err});
  },

  checkJWT: function(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) {
      module.exports.sendError("No Session", req, res);
    } else {
      req.user = jwt.decode(token, 'secret');
      next();
    }
  }


};