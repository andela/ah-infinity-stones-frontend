import { put, takeLatest, call } from 'redux-saga/effects';
import tags from '../../services/articleTags';
import { getByTagsSuccess, getByTagsError } from '../actions/articleActions';
import { GET_BY_TAGS_REQUEST } from '../actions/actionTypes';

function* getArticleByTagsSaga(action) {
  try {
    const { tag } = action;
    const response = yield call(tags, tag);
    if (response.Message) throw (response.Message);
    yield put(getByTagsSuccess(response['Your search results']));
  } catch (error) {
    yield put(getByTagsError(error));
  }
}

export default function* watchGetArticleByTagsSaga() {
  yield takeLatest(GET_BY_TAGS_REQUEST, getArticleByTagsSaga);
}
