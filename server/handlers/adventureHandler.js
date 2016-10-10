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
      photo: req.body.image,
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

  //PUT
  //Edit adventure (eg. Ratings)
  // Expects {rating: #, adventureid: 'adventureid'}
  // Returns the results of the modification
  updateAdventureRating:  function(req, res){
    var userid = req.user._id;
    var rating = req.body.rating;
    var adventureid = req.body.adventureid;


    // Check rating and assign starsParam
    var starsParam = 'threeStar'; //Default Rating
    if (rating === 1) {
      starsParam = 'oneStar';
    } else if ( rating ===2) {
      starsParam = 'twoStar';
    } else if ( rating ===3) {
      starsParam = 'threeStar';
    } else if ( rating ===4) {
      starsParam = 'fourStar';
    } else if ( rating ===5) {
      starsParam = 'fiveStar';
    }

    //Verify userid exists
    User.findOne({_id: userid}, function(err, user){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        if (!user) {
          helper.sendError("No user found", req, res);
        } else {
          //Find, update, save ratings to adventure
          Adventure.findById (adventureid, function(err, adventure) {
            if (err) {
              helper.sendError(err);
            } else {
                adventure.stars[starsParam] = adventure.stars[starsParam] + 1;
                adventure.save (function(err, result){
                  if (err) helper.sendError(err);
                  res.json(result);
                });
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
        // res.json(adventures); // comment this out when uncommenting below
        UserAdventure.find({userId: userid}, 'adventureId')
          .then(function(inwork){
            inwork = inwork.map(function(ad){
              return ad.adventureId.toString();
            })
            var availAds = adventures.filter(function(ad){
              return inwork.indexOf(ad._id.toString())===-1;
            })
            res.json(availAds);
          })
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
    //var coordinates = req.body.coordinates;

    UserAdventure.findOne({userId: userid, adventureId: adventureid})
      .populate('adventureId')
      .exec(function(err, combo){
        if (err) helper.sendError(err, req, res);
        else if (!combo) helper.sendError("No user/adventure combination found", req, res);
        else {

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
              // CREATE POINTS

              // Generate random point value for riddle
              var points = Math.floor((Math.random()*101 + 200));

              // Generate points for adventure completion
              var riddleArr = combo.adventureId.adventure;
              if (combo.completed && riddleArr[0].latitude) {
                var centerCoords = helper.calcCenter(riddleArr);
                var avgDistance = helper.calcAvgDistance(riddleArr, centerCoords);
                var scoreMultiplier = helper.calcScoreMultiplier(avgDistance, riddleArr.length);
                points += Math.floor(100 * scoreMultiplier);
              }

              // ASSIGN Points and Level
              User.findOne({_id: userid}, function(err,user){
                if (err) {
                  console.log('user error: ', err);
                } else {
                    user.points += points;
                    // Assuming 500 points per level:
                    var newLevel = Math.floor(user.points/500) + 1;
                    User.update({_id: userid}, {points: user.points, level: newLevel}, function(err, result){
                      if (err) console.error('user update error');
                      else {
                        //res.json(result);
                      }
                    });
                }
              });
              // Return Points
              res.json(points);
            }
          });

        }
      });

  }


};


/*
if (combo.completed === true) {
  // Miles will be set inside Adventure Model
  // Determine points based on total miles between riddles
    var distanceAB = helper.getDistance({latitute: coordinates[0].latitude, longitutde: coordinates[0].longitude}, {latitute: coordinates[1].latitude, longitutde: coordinates[1].longitude});
     var distanceBC = helper.getDistance({latitute: coordinates[1].latitude, longitutde: coordinates[1].longitude}, {latitute: coordinates[2].latitude, longitutde: coordinates[2].longitude});
      var distanceCA = helper.getDistance({latitute: coordinates[2].latitude, longitutde: coordinates[2].longitude}, {latitute: coordinates[0].latitude, longitutde: coordinates[0].longitude});
    var total = distanceAB + distanceBC + distanceCA;
    console.log('TOTAL distance: ', total);
}
*/