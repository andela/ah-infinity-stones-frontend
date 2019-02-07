/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-redeclare */

import { put, takeLatest, call } from 'redux-saga/effects';
import {
  createArticleSuccessAction,
  createArticleFailureAction,
  getAllArticlesSuccessAction,
  getAllArticlesFailureAction,
  getOneArticleSuccessAction,
  getOneArticleFailureAction,
  rateArticleSuccessAction,
  rateArticleFailureAction,
  searchArticlesSuccessAction,
  searchArticlesFailureAction,
} from '../actions/articleActions';
import {
  CREATE_ARTICLE,
  GET_ALL_ARTICLES_REQUEST,
  GET_ONE_ARTICLE_REQUEST,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  RATE_ARTICLE,
  REPORT_ARTICLE,
  SEARCH_ARTICLES_REQUEST,
} from '../actions/actionTypes';
import {
  createArticle,
  getAllArticles,
  getOneArticle,
  updateArticle,
  deleteArticle,
  rateArticle,
  reportArticle,
  searchArticle,
} from '../../services/articlePayload';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* createArticleSaga(action) {
  try {
    const response = yield call(createArticle, action.payload);
    if (response.art_slug) {
      yield put(createArticleSuccessAction(response));
    } else {
      yield put(createArticleFailureAction(response));
    }
  } catch (e) {
    return e.response;
  }
}
export function* watchCreateArticleSaga() {
  yield takeLatest(CREATE_ARTICLE, createArticleSaga);
}

function* getAllArticlesSaga() {
  try {
    const response = yield call(getAllArticles);
    if (response[0].status === 200) {
      yield put(getAllArticlesSuccessAction(response[1]));
    } else {
      yield put(getAllArticlesFailureAction(response[0].error));
    }
  } catch (e) {
    return e;
  }
}
/**
 * The generator watches the getAllArticlesSaga for event.
 */
export function* watchGetAllArticlesSaga() {
  yield takeLatest(GET_ALL_ARTICLES_REQUEST, getAllArticlesSaga);
}

function* getOneArticleSaga(action) {
  try {
    const response = yield call(getOneArticle, action.payload);
    if (response[0].status === 200) {
      yield put(getOneArticleSuccessAction(response[1]));
    } else {
      yield put(getOneArticleFailureAction(response[0].error));
    }
  } catch (e) {
    return e;
  }
}
/**
 * The generator watches the getAllArticlesSaga for event.
 */
export function* watchGetOneArticleSaga() {
  yield takeLatest(GET_ONE_ARTICLE_REQUEST, getOneArticleSaga);
}

function* updateArticleSaga(action) {
  try {
    const response = yield call(updateArticle, action.payload);
    if (response.message === 'article updated successfully') {
      return response.message;
    }
    return response.error;
  } catch (e) {
    return e;
  }
}
/**
 * The generator watches the editArticleSaga for event.
 */
export function* watchUpdateArticleSaga() {
  yield takeLatest(UPDATE_ARTICLE, updateArticleSaga);
}

function* deleteArticleSaga(action) {
  try {
    yield call(deleteArticle, action.payload);
  } catch (e) {
    console.log(e);
  }
}
/**
 * The generator watches the deleteArticleSaga for event.
 */
export function* watchDeleteArticleSaga() {
  yield takeLatest(DELETE_ARTICLE, deleteArticleSaga);
}
function* rateArticleSaga(action) {
  try {
    const response = yield call(rateArticle, action.payload);
    const article = yield call(getOneArticle, action.payload.art_slug);
    if (response.message) {
      yield put(getOneArticleSuccessAction(article[1]));
      yield put(rateArticleSuccessAction(response.message));
    } else {
      yield put(rateArticleFailureAction(response));
    }
  } catch (e) {
    console.log(e);
  }
}
export function* watchRateArticleSaga() {
  yield takeLatest(RATE_ARTICLE, rateArticleSaga);
}

function* reportArticleSaga(action) {
  try {
    const response = yield call(reportArticle, action.payload);
    if (response.message === 'You have reported this article to the admin.') {
      return response.message;
    }
    return response.error;
  } catch (e) {
    return e.response;
  }
}

/**
 * The generator watches the createArticleSaga for event.
 */
export function* watchReportArticleSaga() {
  yield takeLatest(REPORT_ARTICLE, reportArticleSaga);
}
function* searchArticleSaga(action) {
  try {
    const response = yield call(searchArticle, action.payload);
    const articles = yield call(getAllArticles);
    if (response['Your search results']) {
      yield put(searchArticlesSuccessAction(response));
    } else {
      yield put(searchArticlesFailureAction(response));
      yield delay(5000);
      yield put(getAllArticlesSuccessAction(articles[1]));
    }
  } catch (e) {
    console.log(e);
  }
}
export function* watchSearchArticleSaga() {
  yield takeLatest(SEARCH_ARTICLES_REQUEST, searchArticleSaga);
}
