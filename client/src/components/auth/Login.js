import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../action/auth';

import { Link, Redirect } from 'react-router-dom';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  if (isAuthenticated) {
    return <Redirect to='/quiz' />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        Email:{' '}
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        Password:{' '}
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <button type='submit' value='Login'>
          {' '}
          Login{' '}
        </button>
      </form>
      <p>
        Don't Have account?
        <Link to='/register'>Create Account</Link>
      </p>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProp, { login })(Login);
