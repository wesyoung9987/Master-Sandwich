var Adventure = require('../models/Adventures.js');
var User = require('../models/Users.js');
var UserAdventure = require('../models/UserAdventure.js');
var helper = require('../config/helpers.js');


// export entire object of methods to routes.js
module.exports = {


  // POST
  // Expects {adventureid: 'adventureid'}
  // Returns the new entry in the UserAdventure table
  pickAdventure: function(req, res){
    var userid = req.user._id
    var adventureid = req.body.adventureid;

    Adventure.findOne({_id: adventureid}, 'adventure', function(err, adventure){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        var completion = adventure.adventure.map(function(riddle){
          return false;
        });

        UserAdventure.create({userId: userid, adventureId: adventureid, completion: completion}, function(err, combo){
          if (err) {
            helper.sendError(err, req, res);
          } else {
            res.json(combo);
          }
        });
      }
    });
  },

  // DELETE
  // Expects {adventureid: 'adventureid'}
  // Returns the result of the deletion
  forgetAdventure: function(req, res){
    var userid = req.user._id;
    var adventureid = req.body.adventureid;

    UserAdventure.remove({userId: userid, adventureId: adventureid}, function(err, result){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        res.json(result);
      }
    });
  },

  // POST
  // Expects {title: 'title', adventure: [riddles], startingLocation: 'location'}
  // Returns the created adventure object
  createAdventure:  function(req, res){
    var userid = req.user._id;
    var adventureObj = {
      title: req.body.title,
      creator: userid,
      adventure: req.body.adventure,
      startingLocation: req.body.startingLocation
    };

    User.findOne({_id: userid}, function(err, user){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        if (!user) {
          helper.sendError("No user found", req, res);
        } else {
          Adventure.create(adventureObj, function(err, adventure){
            if (err) {
              helper.sendError(err, req, res);
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
    // except ones you created
  fetchAllAdventures: function(req, res){
    var userid = req.user._id;

    Adventure.find({creator: {$ne: userid}})
      .then(function(adventures){
        res.json(adventures);
        // UserAdventure.find({userId: userid}, 'adventureId')
        //   .then(function(inwork){
        //     inwork = inwork.map(function(ad){
        //       return ad.adventureId.toString();
        //     })
        //     var availAds = adventures.filter(function(ad){
        //       return !inwork.includes(ad._id.toString());
        //     })
        //     res.json(availAds);
        //   })
      });
  },

  // GET
  // No input required
  // Returns array of all user's in-progress adventures in form of:
  // {userId: 'userid', adventureId: adventureObj, completion: [], completed: boolean, date: date}
  fetchMyInProgressAdventures: function(req, res){
    var userid = req.user._id;

    UserAdventure.find({userId: userid})
      .populate('adventureId')
      .exec(function(err, adventures){
        if (err) helper.sendError(err, req, res);
        else res.json(adventures);
      });
  },

  // GET
  // No input required
  // Returns array of all adventures the user created in form of:
  // {title: 'title', creator: 'userid', adventure: [riddles], date: date, startingLocation: 'location'}
  fetchMyCreatedAdventures: function(req, res){
    var userid = req.user._id;

    Adventure.find({creator: userid}, function(err, adventures){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        res.json(adventures);
      }
    });
  },

  // GET
  // Expects adventure id and riddle # (zero index based) in url
  // (/api/fetchRiddle?id=string&num=number)
  // Returns a single riddle object
  // {riddle: 'text', answer: 'text', location: 'location'}
  fetchSingleRiddle: function(req, res){
    var adventureid = req.query.id;
    var riddleNumber = +req.query.num;

    Adventure.findOne({_id: adventureid}, function(err, adventure){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        if (!adventure) {
          helper.sendError("No Adventure", req, res);
        } else {
          res.json(adventure.adventure[riddleNumber]);
        }
      }
    });
  },

  // PUT
  // Expects adventure id and riddle # (zero index based)
    // {adventureid: 'adventureid', riddleNumber: #}
  // Returns the result of the modification
  updateProgress: function(req, res){
    var userid = req.user._id;
    var adventureid = req.body.adventureid;
    var riddleNumber = typeof(req.body.riddleNumber)===Number ? req.body.riddleNumber : +req.body.riddleNumber;

    UserAdventure.findOne({userId: userid, adventureId: adventureid}, function(err, combo){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        if (!combo) {
          helper.sendError("No user/adventure combination found", req, res);
        } else {
          combo.completion[riddleNumber] = true;
          if (combo.completion.every(function(riddle){
            return riddle;
          })) {
            combo.completed = true;
          }
          UserAdventure.update({userId: userid, adventureId: adventureid}, {completion: combo.completion, completed: combo.completed}, function(err, result){
            if (err) {
              helper.sendError(err, req, res);
            } else {
              res.json(result);
            }
          });
        }
      }
    });
  }


};