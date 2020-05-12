const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  taken: [
    {
      quiz: {
        type: Schema.Types.ObjectId,
        ref: 'quiz',
      },
      quiz_name: {
        type: String,
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
});

module.exports = User = mongoose.model('user', UserSchema);
