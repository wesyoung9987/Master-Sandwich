var Adventure = require('../models/Adventures.js');
var User = require('../models/Users.js');
// var Join = require('../models/Join.js');

/*
User.findOne({_id: '57e549a121714a66a2d4419b'}, function(err, user){
  if (!user) console.log("NO USER");
  else {
    console.log("USER FOUND");
    Adventure.create({title: "Ad2", creator: '57e549a121714a66a2d4419b'}, function(err, adventure){
      if (err) console.log("ERR");
      else console.log("ADVENTURE: ", adventure);
    });
  }
});
*/

/*
Adventure.find({})
  .populate('creator')
  .exec(function(err, adventures){
    if (err) console.log("ERROR");
    else if (!adventures) console.log("NO ADVENTURE");
    else console.log("ADVENTURES: ", adventures);
  })
*/



// export entire object of methods to routes.js
module.exports = {


  // POST
  // Expects {userid: 'userid', adventureid: 'adventureid'}
  // Only returns status 200
  pickAdventure: function(req, res){
    var userid = req.body.userid;
    var adventureid = req.body.adventureid;

    Adventure.findOne({_id: adventureid}, 'riddles', function(err, adventure){
      if (err) {
        res.status(500).send({error: err});
      } else {
        var completion = adventure.riddles.map(function(riddle){
          return false;
        });
        Join.create({userid: userid, adventureid: adventureid, completion: completion}, function(err, combo){
          if (err) {
            res.status(500).send({error: err});
          } else {
            res.status(200);
          }
        });
      }
    });
  },

  // DELETE
  // Expects {userid: 'userid', adventureid: 'adventureid'}
  // Only returns status 200
  forgetAdventure: function(req, res){
    var userid = req.body.userid;
    var adventureid = req.body.adventureid;

    Join.remove({userid: userid, adventureid: adventureid}, function(err, result){
      if (err) {
        res.status(500).send({error: err});
      } else {
        res.json(result);
      }
    });
  },

  // POST
  createAdventure:  function(req, res){
    var userid = req.body.userid;

  },

  // DELETE
  deleteAdventure:  function(req, res){},

  // GET
  // No input required
  // Returns array of all adventures
  fetchAllAdventures: function(req, res){
    Adventure.find({})
      .then(function(adventures){
        res.json(adventures);
      });
  },

  // GET
  fetchMyInProgressAdventures: function(req, res){
    // Need user id
  },

  // GET
  fetchMyCreatedAdventures: function(req, res){
    // Need user id
  },

  // GET
  fetchSingleRiddle: function(req, res){
    // Need adventure id
  }


};