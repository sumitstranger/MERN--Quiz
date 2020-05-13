import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../action/users';

const Users = ({ getAllUsers, users_st: { users, loading } }) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <Fragment>
      {loading && users === null ? (
        'Loading.....'
      ) : (
        <div>
          {users.users.map((user) => (
            <div key={user._id}>
              <p>Name:{user.name}</p>
              <p>Email:{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  users_st: state.users,
});

export default connect(mapStateToProp, { getAllUsers })(Users);
