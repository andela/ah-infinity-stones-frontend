/* eslint-disable no-undef */
import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_LOGIN } from '../actions/actionTypes';
import {
  receiveLogin,
  loginError,
} from '../actions/loginActions';
import login from '../../services/login';

/* worker saga */
export function* loginSaga(action) {
  try {
    const { user } = action;
    const response = yield call(login, user);
    if (response.user) {
      if (response.user.Token) {
        yield put(receiveLogin(response.user.Message));
        localStorage.setItem('Token', response.user.Token);
      } else {
        yield put(loginError(response.user.detail));
      }
    } else {
      yield put(loginError(response.errors));
    }
  } catch (error) {
    yield put(loginError(error));
  }
}

/* eslint-disable */
/* watcher saga */
export function* watchLogin() {
    yield takeLatest(REQUEST_LOGIN, loginSaga);
}
