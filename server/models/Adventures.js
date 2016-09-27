var mongoose = require('mongoose');

var AdventureSchema = new mongoose.Schema({
  title: String,
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  adventure: [{riddle: String, answer: String, location: String, photo: String }],
  date: { type: Date, default: Date.now() },
  completedAll: { type: Boolean, default: false },
  startingLocation: String
});

var Adventure = mongoose.model('Adventure', AdventureSchema);

module.exports = Adventure;