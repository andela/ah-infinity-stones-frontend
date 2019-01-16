import {
  SEND_LIKE, LIKE_SUCCESS, LIKE_ERROR,
} from './actionTypes';

export const sendLike = (likeData, artSlug) => ({
  type: SEND_LIKE,
  likeData,
  artSlug,
});
export const likeSuccess = data => ({
  type: LIKE_SUCCESS,
  data,
});
export const likeError = error => ({
  type: LIKE_ERROR,
  error,
});
