/* eslint-disable no-undef,no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_BOOKMARKS } from '../actions/actionTypes';
import { bookmarksSuccess, bookmarksFailure } from '../actions/bookmarksActions';
import bookmarksService from '../../services/bookmarks.service';


export function* bookmarksSaga() {
  try {
    const response = yield call(bookmarksService);
    if (response.count) {
      yield put(bookmarksSuccess(response));
    } else {
      yield put(bookmarksFailure(response.detail));
    }
  } catch (e) {
    yield put(bookmarksFailure(e));
  }
}

export default function* watchBookmarks() {
  yield takeLatest(REQUEST_BOOKMARKS, bookmarksSaga);
}
