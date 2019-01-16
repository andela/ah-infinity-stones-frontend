import {
  CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE,
  GET_ALL_ARTICLES_REQUEST, GET_ALL_ARTICLES_SUCCESS, GET_ALL_ARTICLES_FAILURE,
  GET_ONE_ARTICLE_REQUEST, GET_ONE_ARTICLE_SUCCESS, GET_ONE_ARTICLE_FAILURE,
  EDIT_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE,
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
