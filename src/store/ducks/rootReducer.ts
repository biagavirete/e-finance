import { combineReducers } from 'redux';
import currency from './currency';
import users from './users';
import finance from './finances';

const createRootReducer = () => combineReducers({
  currency,
  users,
  finance
})

export default createRootReducer
