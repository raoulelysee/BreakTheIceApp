import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';


export default combineReducers({
  auth: AuthReducer,
  user: UserReducer
});
