import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import comment from './comment'
import notif from './notification'
import questions from './question'


export const reducers = combineReducers({ posts, auth,comment,notif,questions});
