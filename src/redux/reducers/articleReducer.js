import {
  CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE,
  GET_ALL_ARTICLES_SUCCESS, GET_ALL_ARTICLES_FAILURE,
  GET_ONE_ARTICLE_SUCCESS, GET_ONE_ARTICLE_FAILURE,
  UPDATE_ARTICLE, DELETE_ARTICLE,
} from '../actions/actionTypes';

const initialState = {
  article: {},
  articles: [],
  error: {},
  specificArticle: {},
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
      const newState = state.articles.filter(article => article.art_slug !== action.payload);
      return {
        ...state,
        articles: newState,
      };
    default:
      return state;
  }
};
