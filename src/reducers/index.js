import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  transactions: transactionReducer,
});

export default rootReducer;