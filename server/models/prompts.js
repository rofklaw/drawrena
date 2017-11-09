var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PromptSchema = new Schema({
  subject: {type: String},
  contest: {type: Array}
})

mongoose.model('Prompt', PromptSchema);
