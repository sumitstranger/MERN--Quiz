import {
  GET_QUIZ,
  GET_QUESTIONS,
  GET_OPTIONS,
} from '../components/action/types';

const initialState = {
  quiz: [],
  questions: {},
  options: [],
  errors: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_QUIZ:
      return {
        ...state,
        quiz: payload,
        loading: false,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        loading: false,
      };
    case GET_OPTIONS:
      return {
        ...state,
        //Remaining
      };

    default:
      return state;
  }
}
