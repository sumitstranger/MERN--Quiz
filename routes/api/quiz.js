const auth = require('../../middleware/auth');
const express = require('express');
const route = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Quiz = require('../../models/Quiz');
const Qusetion = require('../../models/Question');
const Option = require('../../models/Options');

//route POST /api/quiz
//decq   create quiz
//access private

route.post(
  '/',
  [
    auth,
    // [
    //   check('quiz_name', 'Quiz name is required').not().isEmpty(),
    //   check('question_text', 'Question is required').not().isEmpty(),
    // ],
  ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty())
    //   return res.status(400).json({ errors: errors.array() });

    const {
      quiz_name,
      question_text,
      option1,
      option2,
      option3,
      option4,
    } = req.body;
    try {
      const user = await User.findById(req.user.id);
      let quiz = await Quiz.findOne({ quiz_name });
      if (!quiz) {
        quiz = new Quiz({
          quiz_name,
          author: user.id,
        });
        await quiz.save();
      }

      const question = new Qusetion({
        question_text,
        quiz_name: quiz.id,
      });
      await question.save();

      const opt1 = new Option({
        question: question.id,
        option_text: option1,
      });

      const opt2 = new Option({
        question: question.id,
        option_text: option2,
      });

      const opt3 = new Option({
        question: question.id,
        option_text: option3,
      });
      const opt4 = new Option({
        question: question.id,
        option_text: option4,
      });

      await opt1.save();
      await opt2.save();
      await opt3.save();
      await opt4.save();

      res.json(quiz);
    } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
  }
);

route.get('/', auth, async (req, res) => {
  try {
    const quiz = await Qusetion.find({ quiz_name: '5eb57b7ac8f9bf653ff0fb83' });
    const option = await Option.find({ question: '5eb57b7bc8f9bf653ff0fb84' });
    res.json({ quiz, option });
  } catch (error) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = route;
