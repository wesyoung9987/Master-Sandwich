var User = require('../models/Users.js');

// export entire object of methods to routes.js
module.exports = {

  // signin method
  // expects {email: 'email@email.com', password: 'pass123'}
  // returns {token: true} if successful (what should it return?)
  signin: function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({'email': email}, function(err, user){
      if (err) {
        console.log("db findOne signin err: ", err);
      } else {
        if (!user) { // notifies if user is not found
          res.status(500).send({error: err});
        } else {
          user.comparePasswords(password, function(err, match){
            if (!match) { // notifies if password is invalid
              res.status(500).send({error: "Password Invalid"});
            } else { // signin success, session token?
              res.json({
                userid: user['_id'] // what should be sent back on success?
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
  // returns {token: true} if successful (what should it return?)
  signup: function(req, res){
    var email = req.body.email;
    var newUserObj = req.body

    User.findOne({'email': email}, function(err, user){
      if (err) { // notifies if error is thrown
        console.log("db findOne signup err: ", err);
        res.status(500).send({error: err});
      } else {
        if (user) { // notifies if email is already taken
          res.status(500).send({error: "Email already taken"});
        } else {
          User.create(newUserObj, function(err, user){
            if (err) { // notifies if error is thrown
              console.log("db create user err: ", err);
              res.status(500).send({error: err});
            } else { // signup success, session token?
              res.json({
                userid: user['_id'] // what should be sent back on success?
              });
            }
          });
        }
      }
    });
  }


};