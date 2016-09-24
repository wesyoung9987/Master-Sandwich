var Adventure = require('../models/Adventures.js');
var User = require('../models/Users.js');
var UserAdventure = require('../models/UserAdventure.js');


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
  // Expects {userid: 'userid', title: 'title', adventure: [riddles], startingLocation: 'location'}
  // Returns status 200 on success
  createAdventure:  function(req, res){
    var userid = req.body.userid;
    var adventureObj = {
      title: req.body.title
      creator: userid,
      adventure: req.body.adventure,
      startingLocation: req.body.startingLocation
    };

    User.find({_id: userid}, function(err, user){
      if (err) {
        res.status(500).send({error: err});
      } else {
        if (!user) {
          res.status(500).send({error: "No user found"});
        } else {
          Adventure.create(adventureObj, function(err, adventure){
            if (err) {
              res.status(500).send({error: err});
            } else {
              res.json(adventure);
            }
          });
        }
      }
    });
  },

  // DELETE
  // Not MVP
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
  // Expects userid parameter passed in url (/api/fetchMine/id)
  // Returns array of all users in progress adventures in form of:
  // {userId: 'userid', adventureId: adventureObj, completion: [], completed: boolean, date: date}
  fetchMyInProgressAdventures: function(req, res){
    var userid = req.param.id;

    UserAdventure.find({userId: userid})
      .populate('adventureId')
      .exec(function(err, adventures){
        if (err) res.status(500).send({error: err});
        else if (!adventures) res.status(500).send({error: "No Adventures"});
        else res.json(adventures);
      });
  },

  // GET
  // Expects userid parameter passed in url (/api/fetchCreated/:id)
  // Returns array of all adventures the user created in form of:
  // {title: 'title', creator: 'userid', adventure: [riddles], date: date, startingLocation: 'location'}
  fetchMyCreatedAdventures: function(req, res){
    var userid = req.param.id

    Adventures.find({creator: userid}, function(err, adventures){
      if (err) {
        res.status(500).send({error: err});
      } else {
        if (!adventures) {
          res.status(500).send({error: "No adventures"})
        } else {
          res.json(adventures);
        }
      }
    });
  },

  // GET
  // Expects adventure id and riddle # (zero index based) in url
  // (/api/fetchRiddle?id=string&num=number)
  // Returns a single riddle object
  // {riddle: 'text', answer: 'text', location: 'location'}
  fetchSingleRiddle: function(req, res){
    var adventureid = req.param('id');
    var riddleNumber = +req.param('num');

    Adventure.findOne({_id: adventureid}, function(err, adventure){
      if (err) {
        res.status(500).send({error: err});
      } else {
        if (!adventure) {
          res.status(500).send({error: "No Adventure"});
        } else {
          res.json(adventure.adventure[riddleNumber]);
        }
      }
    });
  }


};