import { GET_QUIZ, GET_QUESTIONS_SET, ERROR, RESPONCE_SEND } from './types';

import axios from 'axios';

export const getQuiz = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/quiz');
    dispatch({
      type: GET_QUIZ,
      payload: res.data,
    });
    console.log(localStorage.token);
  } catch (err) {
    console.log('[Error]', err.response.data);
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};

export const getQuestion = (quiz_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/quiz/${quiz_id}`);
    dispatch({
      type: GET_QUESTIONS_SET,
      payload: res.data,
    });
    console.log(localStorage.token);
  } catch (err) {
    console.log('[Error]', err.response.data);
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};

export const sendQuizResponse = (formData, quiz_id) => async (dispatch) => {
  try {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(`/api/quiz/${quiz_id}`, formData, config);
    console.log(res.data);
    dispatch({
      type: RESPONCE_SEND,
      payload: res.data,
    });
    console.log(localStorage.token);
  } catch (err) {
    console.log('[Error]', err.response.data);
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};
