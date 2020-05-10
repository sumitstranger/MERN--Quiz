import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getQuestion, sendQuizResponse } from '../action/quiz';

const Question = ({
  getQuestion,
  sendQuizResponse,
  match,
  quiz: { questions, quizList, loading, result, score },
}) => {
  const [form, setForm] = useState();

  useEffect(() => {
    getQuestion(match.params.id);
  }, [getQuestion, match.params.id]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    sendQuizResponse(form, match.params.id);
  };

  return result ? (
    score
  ) : loading ? (
    'Loding....'
  ) : (
    <Fragment>
      <form method='POST' onSubmit={(e) => onSubmit(e)}>
        <ol>
          {questions.map((qus, index) => (
            <li key={qus.question._id}>
              {qus.question.question_text}

              {qus.option.map((opt) => (
                <Fragment key={opt._id}>
                  <input
                    type='radio'
                    name={index}
                    key={opt._id}
                    value={opt._id}
                    id={opt._id}
                    onChange={(e) => onChange(e)}
                  />
                  {opt.option_text}
                </Fragment>
              ))}
            </li>
          ))}
        </ol>
        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  quiz: state.quiz,
});

export default connect(mapStateToProp, { getQuestion, sendQuizResponse })(
  Question
);
