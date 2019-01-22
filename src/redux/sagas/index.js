import { all } from 'redux-saga/effects';
import watchSocialLogin from './socialLoginSaga';
import { watchLogin } from './loginSaga';
import watchSignupSaga from './signupSaga';

export default function* rootSaga() {
  yield all([watchLogin(), watchSocialLogin(), watchSignupSaga()]);
}
