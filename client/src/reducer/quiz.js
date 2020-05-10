import {
  GET_QUIZ,
  GET_QUESTIONS_SET,
  ERROR,
  RESPONCE_SEND,
} from '../components/action/types';

const initialState = {
  quizList: [],
  questions: [],
  errors: {},
  loading: true,
  result: false,
  score: 0,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_QUIZ:
      return {
        ...state,
        quizList: payload,
        loading: false,
      };
    case GET_QUESTIONS_SET:
      return {
        ...state,
        questions: payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case RESPONCE_SEND:
      return {
        ...state,
        result: true,
        ...payload,
      };

    default:
      return state;
  }
}
