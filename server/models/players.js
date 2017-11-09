var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema ({
  _game: {type: Schema.Types.ObjectId, ref: 'Game'},
  handle: {type: String},
  points: {type: Number, default: 0},
  pictures: []
})

mongoose.model('Player', PlayerSchema)
