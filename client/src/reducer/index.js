import { combineReducers } from 'redux';
import quiz from './quiz';
import auth from './auth';

export default combineReducers({ quiz, auth });
