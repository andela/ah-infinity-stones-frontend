import {
  BOOKMARK_REQUEST,
  BOOKMARK_SUCCESS,
  BOOKMARK_ERROR,
} from './actionTypes';

export const bookmarkRequest = slug => ({
  type: BOOKMARK_REQUEST,
  slug,
});

export const bookmarkSuccess = data => ({
  type: BOOKMARK_SUCCESS,
  data,
});

export const bookmarkError = error => ({
  type: BOOKMARK_ERROR,
  error,
});
