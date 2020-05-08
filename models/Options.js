const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchma = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: 'question',
  },
  option_text: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
});

module.exports = Option = mongoose.model('option', OptionSchma);
