var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type:String, required: true},
  email: {type:String, required: true}
}, {timestamps: true})

mongoose.model('User', UserSchema);
