var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  photo: { type: String, default: '../../TreasureTrek/src/resources/placeholder.png' },
  first: {type: String, default: ''},
  last: {type: String, default: ''},
  username: {type: String, default: ''},
  email: {type: String, default: ''},
  password: {type: String, default: ''},
  points: {type: Number, default: 0},
  level: {type: Number, default: 1}
});

UserSchema.methods.comparePasswords = function(enteredPassword, callback) {
  var hashedPassword = this.password;
  bcrypt.compare(enteredPassword, hashedPassword, function(err, match) {
    callback(err, match);
  })
};

UserSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, function(err, salt){
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

var User = mongoose.model('User', UserSchema);

module.exports = User;