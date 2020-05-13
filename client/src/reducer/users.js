import {
  LOAD_ALL_USER_SUCCESS,
  LOAD_ALL_USER_FAIL,
} from '../components/action/types';

const initialState = {
  token: localStorage.getItem('token'),
  loading: true,
  users: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case LOAD_ALL_USER_FAIL:
      return {
        ...state,
        users: null,
        loading: false,
      };
    default:
      return state;
  }
}
