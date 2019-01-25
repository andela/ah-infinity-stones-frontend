/* eslint-disable no-undef */
import { takeEvery, call, put } from 'redux-saga/effects';
import { SEND_LIKE } from '../actions/actionTypes';
import {
  likeSuccess,
  likeError,
} from '../actions/likeActions';
import like from '../../services/like';


/* worker saga */
export function* likeSaga(action) {
  try {
    const { likeData, artSlug } = action;
    const response = yield call(like, likeData, artSlug);
    if (response.Message) {
      yield put(likeSuccess(response));
    } else {
      yield put(likeError(response.errors));
    }
  } catch (error) {
    yield put(likeError(error));
  }
}


/* eslint-disable */
/* watcher saga */
export function* watchLike() {
    yield takeEvery(SEND_LIKE, likeSaga);
}
