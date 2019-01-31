import { REQUEST_BOOKMARKS, BOOKMARKS_SUCCESS, BOOKMARKS_FAILURE } from './actionTypes';

export const requestBookmarks = () => ({
  type: REQUEST_BOOKMARKS,
});

export const bookmarksSuccess = data => ({
  type: BOOKMARKS_SUCCESS,
  data,
});

export const bookmarksFailure = error => ({
  type: BOOKMARKS_FAILURE,
  error,
});
