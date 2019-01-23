import { call, put, takeLatest } from 'redux-saga/effects';
import socialAuth from '../../services/socialAuth';
import { socialLoginSuccess, socialLoginError } from '../actions/socialLoginActions';
import { SOCIAL_LOGIN_REQUEST } from '../actions/actionTypes';
import SocialAuth from '../../helpers/socialAuthHelpers';


function* socialLoginSaga(action) {
  try {
    const { platform } = action;
    let data;
    if (platform === 'google') {
      ({ data } = action);
    } else {
      data = yield SocialAuth[platform]();
    }
    const response = yield call(socialAuth, data);
    yield put(socialLoginSuccess(response));
    localStorage.setItem('Token', response.user.token);
    localStorage.setItem('user', response.user.username);
  } catch (error) {
    yield put(socialLoginError(error));
  }
}

export default function* watchSocialLogin() {
  yield takeLatest(SOCIAL_LOGIN_REQUEST, socialLoginSaga);
}
