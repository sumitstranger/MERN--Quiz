const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  quiz_name: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  taken_by_list: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      score: {
        type: Number,
      },
      taken_on: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
