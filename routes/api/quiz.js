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
    console.log(option1);
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
        ...option1,
      });

      const opt2 = new Option({
        question: question.id,
        ...option2,
      });

      const opt3 = new Option({
        question: question.id,
        ...option3,
      });
      const opt4 = new Option({
        question: question.id,
        ...option4,
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

route.get('/:quiz_id', async (req, res) => {
  try {
    let que_set = new Array();
    const quiz = await Qusetion.find({ quiz_name: req.params.quiz_id });

    que_set = await Promise.all(
      quiz.map(async (q) => {
        let ques_obj = new Object();

        const option = await Option.find({ question: q._id });

        let option_set = new Array();

        option.forEach((opt) => option_set.push(opt));

        ques_obj = {
          question: q,
          option: option_set,
        };
        return ques_obj;
        //  console.log(ques_obj);
      })
    );

    console.log(que_set);
    res.json(que_set);
    //res.json(JSON.stringify(que_set));
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

route.get('/', async (req, res) => {
  try {
    const quizList = await Quiz.find();
    res.json(quizList);
  } catch (error) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = route;

route.post('/:id', async (req, res) => {
  let score = 0;
  try {
    console.log('-------');
    await Promise.all(
      Object.values(req.body).map(async (id) => {
        const option = await Option.findById(id).select('isCorrect');
        if (option.isCorrect) score = score + 1;
      })
    );
    console.log(score);
    res.json({ score });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});
