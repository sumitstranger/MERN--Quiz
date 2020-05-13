import { combineReducers } from 'redux';
import quiz from './quiz';
import auth from './auth';
import users from './users';

export default combineReducers({ quiz, auth, users });
