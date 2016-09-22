var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first: String,
  last: String,
  username: String,
  email: String,
  points: Number,
  level: Number,
  password: String,
  myAdventures: [{ type: ObjectId, ref: 'Adventure' }],
  currentAdventures: [{ type: ObjectId, ref: 'Adventure' }]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;