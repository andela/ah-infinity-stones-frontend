import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import socialLoginReducer from './socialLoginReducer';
import passwordReset from './passwordResetReducer';

import loginReducer from './loginReducer';
import articleReducer from './articleReducer';
import likeReducer from './likeReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  socialLoginReducer,
  loginReducer,
  signupReducer,
  passwordReset,
  articleReducer,
  likeReducer,
  profileReducer,
});
