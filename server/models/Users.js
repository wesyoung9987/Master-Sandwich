var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first: String,
  last: String,
  email: String,
  points: Number,
  level: Number,
  password: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;