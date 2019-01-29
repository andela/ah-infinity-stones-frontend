import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import {
  BOOKMARK_REQUEST,
} from '../actions/actionTypes';
import {
  bookmarkSuccess,
  bookmarkError,
} from '../actions/bookmarkActions';
import {
  bookmark,
  unbookmark,
} from '../../services/bookmark';


function* bookmarkSaga(action) {
  const {
    slug,
  } = action;

  const response = yield call(bookmark, slug);
  try {
    if (response.message === 'bookmarked') {
      yield put(bookmarkSuccess(response.message));
    } else {
      const response2 = yield call(unbookmark, slug);
      yield put(bookmarkError(response2.message));
    }
  } catch (e) {
    yield put(bookmarkError(e));
  }
}

export default function* watchBookmark() {
  yield takeLatest(BOOKMARK_REQUEST, bookmarkSaga);
}
