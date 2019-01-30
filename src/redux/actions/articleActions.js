/* eslint-disable no-console */
/* eslint-disable rule camelcase */
/* eslint-disable camelcase */
import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  GET_ALL_ARTICLES_REQUEST,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAILURE,
  GET_ONE_ARTICLE_REQUEST,
  GET_ONE_ARTICLE_SUCCESS,
  GET_ONE_ARTICLE_FAILURE,
  EDIT_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  RATE_ARTICLE,
  RATE_ARTICLE_SUCCESS,
  RATE_ARTICLE_FAILURE,
  GET_BY_TAGS_REQUEST,
  GET_BY_TAGS_SUCCESS,
  GET_BY_TAGS_ERROR,
  REPORT_ARTICLE,
  SEARCH_ARTICLES_REQUEST,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_FAILURE,
} from './actionTypes';

export const createArticleAction = article => ({
  type: CREATE_ARTICLE,
  payload: article,
});
export const createArticleSuccessAction = article => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload: article,
});
export const createArticleFailureAction = error => ({
  type: CREATE_ARTICLE_FAILURE,
  payload: error,
});
export const getAllArticlesRequestAction = () => ({
  type: GET_ALL_ARTICLES_REQUEST,
});
export const getAllArticlesSuccessAction = articles => ({
  type: GET_ALL_ARTICLES_SUCCESS,
  payload: [articles],
});
export const getAllArticlesFailureAction = error => ({
  type: GET_ALL_ARTICLES_FAILURE,
  payload: error,
});
export const getOneArticleRequestAction = artSlug => ({
  type: GET_ONE_ARTICLE_REQUEST,
  payload: artSlug,
});
export const getOneArticleSuccessAction = article => ({
  type: GET_ONE_ARTICLE_SUCCESS,
  payload: article,
});
export const getOneArticleFailureAction = error => ({
  type: GET_ONE_ARTICLE_FAILURE,
  payload: error,
});
export const editArticleAction = article => ({
  type: EDIT_ARTICLE,
  payload: article,
});
export const updateArticleAction = article => ({
  type: UPDATE_ARTICLE,
  payload: article,
});
export const deleteArticleAction = art_slug => ({
  type: DELETE_ARTICLE,
  payload: art_slug,
});

export const rateArticleAction = payload => ({
  type: RATE_ARTICLE,
  payload,
});
export const rateArticleSuccessAction = payload => ({
  type: RATE_ARTICLE_SUCCESS,
  payload,
});
export const rateArticleFailureAction = payload => ({
  type: RATE_ARTICLE_FAILURE,
  payload,
});

export const getByTagsRequest = tag => ({
  type: GET_BY_TAGS_REQUEST,
  tag,
});

export const getByTagsSuccess = data => ({
  type: GET_BY_TAGS_SUCCESS,
  data,
});

export const getByTagsError = error => ({
  type: GET_BY_TAGS_ERROR,
  error,
});
export const reportArticleAction = reportMessage => ({
  type: REPORT_ARTICLE,
  payload: reportMessage,
});

export const searchArticlesRequest = payload => ({
  type: SEARCH_ARTICLES_REQUEST,
  payload,
});

export const searchArticlesSuccessAction = payload => ({
  type: SEARCH_ARTICLES_SUCCESS,
  payload,
});

export const searchArticlesFailureAction = payload => ({
  type: SEARCH_ARTICLES_FAILURE,
  payload,
});
