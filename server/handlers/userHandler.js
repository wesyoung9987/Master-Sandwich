var jwt = require('jwt-simple');
var User = require('../models/Users.js');
var helper = require('../config/helpers.js');

// export entire object of methods to routes.js
module.exports = {

  // signin method
  // expects {email: 'email@email.com', password: 'pass123'}
  // returns {token: 'jwt_token_string'} if successful
  signin: function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({'email': email}, function(err, user){
      if (err) {
        helper.sendError(err, req, res);
      } else {
        if (!user) { // notifies if user is not found
          helper.sendError("No User Found", req, res);
        } else {
          user.comparePasswords(password, function(err, match){
            if (!match) { // notifies if password is invalid
              helper.sendError("Password Invalid", req, res);
            } else { // signin success, sends jwt token
              var token = jwt.encode(user, 'secret');
              res.json({
                userid: token
              });
            }
          });
        }
      }
    });
  },

  // signup method
  // expects {email: 'email@email.com', password: 'pass123'} at minimum
    // can contain more properties
  // returns {userid: 'jwt_token_string'} if successful
  signup: function(req, res){
    var email = req.body.email;
    var newUserObj = req.body

    User.findOne({'email': email}, function(err, user){
      if (err) { // notifies if error is thrown
        helper.sendError(err, req, res);
      } else {
        if (user) { // notifies if email is already taken
          helper.sendError("Email already taken", req, res);
        } else {
          User.create(newUserObj, function(err, user){
            if (err) { // notifies if error is thrown
              helper.sendError(err, req, res);
            } else { // signup success, sends jwt token
              var token = jwt.encode(user, 'secret');
              res.json({
                userid: token
              });
            }
          });
        }
      }
    });
  },

  // Need to refactor to only send back pertinent info (ex. not password)
  fetchMyInfo: function(req, res){
    var userid = req.user._id;

    // No need to query db, all user info is in req.user
    User.findOne({_id: userid}, function(err, user){
      if(err){
        helper.sendError(err, req, res);
      } else {
        res.json(user);
      }
    })
  },

  savePhoto: function(req, res){
    var userid = req.user._id;
    var userPhoto = req.body;

    User.findById(userid, function (err, user) {
      if (err) return handleError(err);

      user.username = userPhoto;
      user.save(function (err, updatedUser) {
        if (err) return handleError(err);
        res.send(updatedUser);
      });
    });
  }

};