var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GameSchema = new Schema ({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  players: [{type: Schema.Types.ObjectId, ref: 'Player'}],
  code: {type: String}
})

mongoose.model('Game', GameSchema);
