var mongoose = require('mongoose');

var UserAdventureSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  adventureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Adventure' },
  completion: [{ type: Boolean, default: false }, { type: Boolean, default: false }, { type: Boolean, default: false }],
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

var UserAdventure = mongoose.model('UserAdventure', UserAdventureSchema);

module.exports = UserAdventure;