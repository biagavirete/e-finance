import { combineReducers } from 'redux';
import currency from './currency';
import users from './users';

const createRootReducer = () => combineReducers({
  currency,
  users
})

export default createRootReducer
