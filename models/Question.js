const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  quiz_name: {
    type: Schema.Types.ObjectId,
    ref: 'quiz',
  },
  question_number: {
    type: Number,
  },
  question_text: {
    type: String,
    required: true,
  },
});

module.exports = Question = mongoose.model('question', QuestionSchema);
