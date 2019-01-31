import {
  BOOKMARK_REQUEST,
  BOOKMARK_SUCCESS,
  BOOKMARK_ERROR,
} from '../actions/actionTypes';

const initialState = {
  message: null,
  error: null,
};


const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKMARK_REQUEST:
      return {
        ...state,
      };
    case BOOKMARK_SUCCESS:
      return {
        ...state,
        message: action.data,
        error: null,
      };
    case BOOKMARK_ERROR:
      return {
        ...state,
        error: action.error,
        message: null,
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
