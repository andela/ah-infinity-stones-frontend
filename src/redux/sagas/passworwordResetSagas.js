import { takeLatest, call, put } from 'redux-saga/effects';
import { PASSWORD_RESET_START, PASSWORD_RESET_UPDATE_START } from '../actions/actionTypes';
import {
  resetPasswordUpdateComplete,
  resetPasswordUpdaterror,
  resetPasswordComplete,
  requestPasswordResetError,
} from '../actions/passwordResetAction';
import { passwordReset, passwordUpdate } from '../../services/passwordResetmail';


function* resetLinkSaga(action) {
  try {
    const { email } = action;
    const response = yield call(passwordReset, email);
    if (response.Message) {
      yield put(resetPasswordComplete(response.Message));
      localStorage.setItem('Token', response.Token);
    } else {
      yield put(requestPasswordResetError(response.errors));
    }
  } catch (error) {
    yield put(requestPasswordResetError(error));
  }
}

export function* passwordUpdateSaga(action) {
  try {
    const { password } = action;
    const response = yield call(passwordUpdate, password);
    if (response.user) {
      yield put(resetPasswordUpdateComplete(response.user.message));
    } else {
      yield put(resetPasswordUpdaterror(response.errors));
    }
  } catch (error) {
    yield put(resetPasswordUpdaterror(error));
  }
}


export function* watchSendResetLink() {
  yield takeLatest(PASSWORD_RESET_START, resetLinkSaga);
}

export function* watchPasswordreset() {
  yield takeLatest(PASSWORD_RESET_UPDATE_START, passwordUpdateSaga);
}
