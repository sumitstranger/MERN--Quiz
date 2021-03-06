import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT,
  LODEUSER_SUCCESS,
  LODEUSER_FAIL,
} from './types';
import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    console.log(localStorage.token);
  } catch (err) {
    console.log('[LOGIN_FAIL]', err.response.data);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    console.log(localStorage.token);
  } catch (err) {
    console.log('[REGISTER_FAIL]', err.response.data);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users/me');
    dispatch({
      type: LODEUSER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log('[LODEUSER_FAIL]', err.response.data);
    dispatch({
      type: LODEUSER_FAIL,
    });
  }
};
