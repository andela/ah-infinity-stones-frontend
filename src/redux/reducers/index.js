import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import socialLoginReducer from './socialLoginReducer';

import loginReducer from './loginReducer';

export default combineReducers({
  socialLoginReducer,
  loginReducer,
  signupReducer,
});
