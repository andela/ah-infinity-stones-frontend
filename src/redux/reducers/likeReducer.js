/* eslint-disable no-return-assign, no-param-reassign */
import {
  SEND_LIKE,
  LIKE_SUCCESS,
  LIKE_ERROR,
} from '../actions/actionTypes';


const initialState = {
  success: null,
  error: null,
  dislikeCount: null,
  likeCount: null,
  liked: null,
  disliked: null,
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_LIKE:
      return {
        ...state,
        error: null,
      };
    case LIKE_SUCCESS:
      return {
        ...state,
        success: action.data.Message,
        liked: action.data.liked,
        likeCount: action.data.likes_count,
        disliked: action.data.disliked,
        dislikeCount: action.data.dislikes_count,
      };
    case LIKE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default likeReducer;
