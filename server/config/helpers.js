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
  },

  // Calculates the geometric center of all riddle locations
  calcCenter: function(riddles) {
    return riddles.reduce(function(coords, riddle){
      return {
        latitude: coords.latitude + riddle.latitude/riddles.length,
        longitude: coords.longitude + riddle.longitude/riddles.length
      };
    }, {latitude: 0, longitude: 0});
  },

  // Calculates the average distance of riddles to geometric center
  calcAvgDistance: function(riddles, center) {
    return riddles.reduce(function(dist, riddle){
      var distX = riddle.longitude - center.longitude;
      var distY = riddle.latitude - center.latitude;
      return dist + Math.sqrt(distX*distX + distY*distY)/riddles.length
    }, 0)
  },

  // Calculates score multiplier for adventure completion
  // Based on number of riddles and avg distance to geometric center
  calcScoreMultiplier: function(distance, quantity) {
    return 1
         + Math.min(0.2*(quantity-1), 2)
         + Math.min(100*distance, 5);
  }


};