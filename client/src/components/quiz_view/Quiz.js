import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { getQuiz } from '../action/quiz';
import { connect } from 'react-redux';

const Quiz = ({ getQuiz, quiz: { quizList, loading } }) => {
  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  return loading ? (
    'Loading....'
  ) : (
    <Fragment>
      <ol>
        {quizList.map((quiz) => (
          <li key={quiz._id}>
            <Link to={`/${quiz._id}`}>{quiz.quiz_name}</Link>
          </li>
        ))}
      </ol>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  quiz: state.quiz,
});

export default connect(mapStateToProps, { getQuiz })(Quiz);
