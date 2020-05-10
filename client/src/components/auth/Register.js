import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../action/auth';

import { Link, Redirect } from 'react-router-dom';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { name, email, password } = formData;
  if (isAuthenticated) {
    return <Redirect to='/quiz' />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };
  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        Name:{' '}
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
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
          Create{' '}
        </button>
      </form>
      <p>
        Alreadt Have account?
        <Link to='/'>Login</Link>
      </p>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProp, { register })(Register);
