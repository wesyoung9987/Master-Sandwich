var mongoose = require('mongoose');

var CurrentAdventureSchema = new mongoose.Schema({
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
  photo: String,
  date: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  owner: { type: ObjectId, ref: 'User' }
});

var CurrentAdventure = mongoose.model('CurrentAdventure', CurrentAdventureSchema);

module.exports = CurrentAdventure;