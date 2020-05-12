import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../action/auth';

const Dashboard = ({ getUser, auth: { loading, user } }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <Fragment>
      {loading || user === null ? (
        'Loading...'
      ) : (
        <div>
          <p>Name:{user.user.name}</p>
          <p>Email:{user.user.email}</p>
          <h2>Quiz Taken</h2>
          {user.user.taken.length <= 0 ? (
            <h3>No taken yet</h3>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Quiz</th>
                  <th>Score</th>
                  <th>Taken On</th>
                </tr>
              </thead>
              <tbody>
                {user.user.taken.map((quiz) => (
                  <tr key={quiz._id}>
                    <td>{quiz.quiz_name}</td>
                    <td>{quiz.score}</td>
                    <td>{quiz.taken_on}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp, { getUser })(Dashboard);
