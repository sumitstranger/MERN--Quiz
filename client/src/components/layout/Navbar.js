import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../action/auth';

const Navbar = ({ logout, auth: { isAuthenticated } }) => {
  const authLink = (
    <ul>
      <li>
        <Link to='/users'>Users</Link>
      </li>
      <li>
        <Link to='/quiz'>Quizs</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <a onClick={logout} href='/'>
          Logout
        </a>
      </li>
    </ul>
  );
  //const guestLink = ()
  return <nav>{isAuthenticated && authLink}</nav>;
};

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp, { logout })(Navbar);
