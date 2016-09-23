var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  first: String,
  last: String,
  username: String,
  email: String,
  password: String,
  points: Number,
  level: Number,
  password: String,
  myAdventures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Adventure' }],
  currentAdventures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Adventure' }]
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