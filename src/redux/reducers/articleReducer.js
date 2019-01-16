/* eslint-disable no-case-declarations */
import {
  CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE,
  GET_ALL_ARTICLES_SUCCESS, GET_ALL_ARTICLES_FAILURE,
  GET_ONE_ARTICLE_SUCCESS, GET_ONE_ARTICLE_FAILURE,
  UPDATE_ARTICLE, DELETE_ARTICLE, RATE_ARTICLE,
  RATE_ARTICLE_SUCCESS, RATE_ARTICLE_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  article: {},
  articles: [],
  error: {},
  specificArticle: {},
  rated: false,
  rate: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
    case CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case GET_ALL_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ONE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
    case GET_ONE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => article.art_slug !== action.payload),
      };
    case RATE_ARTICLE:
      return {
        ...state,
        rated: false,
        rate: action.payload.rating,
      };
    case RATE_ARTICLE_SUCCESS:
      return {
        ...state,
        rated: true,
        error: action.payload,
        rate: action.payload.rating,
      };
    case RATE_ARTICLE_FAILURE:
      return {
        ...state,
        rated: false,
        error: action.payload,
        rate: action.payload.rating,
      };
    default:
      return state;
  }
};
