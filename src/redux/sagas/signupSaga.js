/* eslint-disable no-console */
/* eslint-disable no-undef */

import { put, takeLatest, call } from 'redux-saga/effects';

import { signupSuccessAction, signupFailureAction } from '../actions/signupActions';
import { SIGNUP_REQUEST } from '../actions/actionTypes';
import register from '../../services/signupPayload';
// import { saveToken } from '../../services/auth/token';

/**
 *
 * @param {*} action
 * @returns {void}
 */
export function* signupSaga(action) {
  try {
    const response = yield call(register, action.payload);
    if (response.user) {
      yield put(signupSuccessAction(response.user));
      localStorage.setItem('Token', response.user.Token);
    } else {
      yield put(signupFailureAction(response.errors));
    }
  } catch (e) {
    console.log(e.response);
  }
}

/**
 * The generator watches the signupSaga for event.
 * @returns {void}
 */
export default function* watchSignupSaga() {
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}
