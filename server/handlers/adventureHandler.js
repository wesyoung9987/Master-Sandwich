var Adventure = require('../models/Adventures.js');
var User = require('../models/Users.js');
var UserAdventure = require('../models/UserAdventure.js');

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
  // Returns status 200 on success
  pickAdventure: function(req, res){
    var userid = req.body.userid;
    var adventureid = req.body.adventureid;

    Adventure.findOne({_id: adventureid}, 'adventure', function(err, adventure){
      if (err) {
        res.status(500).send({error: err});
      } else {
        /*  When we make the number of riddles per adventure variable,
            we will uncomment below and change the userAdventure model
            completion property to an empty array.  Then add completion to the list of properties in the creat method below.
        var completion = adventure.riddles.map(function(riddle){
          return false;
        });
        */
        UserAdventure.create({userId: userid, adventureId: adventureid}, function(err, combo){
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
  // Returns status 200 on success
  forgetAdventure: function(req, res){
    var userid = req.body.userid;
    var adventureid = req.body.adventureid;

    UserAdventure.remove({userid: userId, adventureid: adventureId}, function(err, result){
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