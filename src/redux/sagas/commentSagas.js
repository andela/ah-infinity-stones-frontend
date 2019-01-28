import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_TOPIC,
  TOPIC_RECEIVED,
  GET_COMMENTS,
  COMMENTS_RECEIVED,
  POST_COMMENT,
  COMMENT_POSTED,
} from '../actions/actionTypes';
import { slug, token, isAuthenticated } from '../../services/comment.service';

isAuthenticated();
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const commentsUrl = `https://ah-infinites-staging.herokuapp.com/api/articles/${slug}/comments/`;
const url = proxyurl + commentsUrl;
const topicUrl = `https://ah-infinites-staging.herokuapp.com/api/articles/${slug}`;
const url2 = proxyurl + topicUrl;

function* getTopic() {
  const data = yield fetch(url2).then(res => res.json());
  yield put({ type: TOPIC_RECEIVED, payload: data });
}

function* getComments() {
  const data = yield fetch(url).then(res => res.json());
  yield put({ type: COMMENTS_RECEIVED, payload: data.comments });
}

function* postComment(action) {
  const data = yield fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(action.payload),
  }).then(res => res.json());
  yield put({ type: COMMENT_POSTED, payload: data.comments });
}

export default function* watchComment() {
  yield takeLatest(GET_TOPIC, getTopic);
  yield takeLatest(GET_COMMENTS, getComments);
  yield takeLatest(POST_COMMENT, postComment);
}
