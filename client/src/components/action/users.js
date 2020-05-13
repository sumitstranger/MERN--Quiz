import { LOAD_ALL_USER_FAIL, LOAD_ALL_USER_SUCCESS } from './types';

import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users');
    dispatch({
      type: LOAD_ALL_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log('[LOAD_ALL_USER_FAIL]', err);
    dispatch({
      type: LOAD_ALL_USER_FAIL,
    });
  }
};
