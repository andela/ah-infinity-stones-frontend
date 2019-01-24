import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_PROFILE,
  PROFILE_RECEIVED,
  UPDATE_PROFILE,
  PROFILE_UPDATED,
} from '../actions/actionTypes';
import { token, username, isAuthenticated } from '../../services/profile.service';

isAuthenticated();
const user = username;
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const urlOnline = `https://ah-infinites-staging.herokuapp.com/api/profiles/${user}`;
const url = proxyurl + urlOnline;

function* getProfile() {
  const data = yield fetch(url).then(res => res.json());
  yield put({ type: PROFILE_RECEIVED, payload: data.profile });
}

function* updateProfile(action) {
  const data = yield fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(action.payload),
  }).then(res => res.json());
  yield put({ type: PROFILE_UPDATED, payload: data.profile });
}

export default function* watchProfile() {
  yield takeLatest(GET_PROFILE, getProfile);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
}
