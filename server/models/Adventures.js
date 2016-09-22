var mongoose = require('mongoose');

var AdventureSchema = new mongoose.Schema({
  title: String,
  riddle1: String,
  answer1: String,
  riddle2: String,
  answer2: String,
  riddle3: String,
  answer3: String,
  riddle4: String,
  answer4: String,
  riddle5: String,
  answer5: String,
  location: String,
  user: {type: ObjectId, ref: 'User'}
});

var Adventure = mongoose.model('Adventure', AdventureSchema);

module.exports = Adventure;