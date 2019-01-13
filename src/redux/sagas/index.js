import { all } from 'redux-saga/effects';
import { watchLogin } from './loginSaga';
import watchSignupSaga from './signupSaga';


import { watchSendResetLink, watchPasswordreset } from './passworwordResetSagas';

export default function* rootSaga() {
  yield all([watchLogin(), watchSignupSaga()]);
  yield all([
    watchSendResetLink(),
    watchPasswordreset(),
  ]);
}
