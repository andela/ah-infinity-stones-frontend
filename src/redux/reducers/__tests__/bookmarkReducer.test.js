import bookmarkReducer from '../bookmarkReducer';
import { BOOKMARK_REQUEST, BOOKMARK_SUCCESS, BOOKMARK_ERROR } from '../../actions/actionTypes';

describe('Bookmark Reducer', () => {
  let payload = '';

  beforeEach(() => {
    payload = 'remmy-is-here';
  });
  it('should return the initial state', () => {
    expect(bookmarkReducer(undefined, {})).toEqual({
      message: null,
      error: null,
    });
  });

  it('should handle BOOKMARK_REQUEST', () => {
    expect(
      bookmarkReducer(undefined, {
        type: BOOKMARK_REQUEST,
        payload,
      }),
    ).toEqual({
      message: null,
      error: null,
    });
  });

  it('should handle BOOKMARK_SUCCESS', () => {
    const data = 'Bookmarked';
    expect(
      bookmarkReducer(undefined, {
        type: BOOKMARK_SUCCESS,
        data,
      }),
    ).toEqual({
      message: data,
      error: null,
    });
  });

  it('should handle BOOKMARK_FAILURE', () => {
    const error = 'Successfully removed from bookmark';
    expect(
      bookmarkReducer(undefined, {
        type: BOOKMARK_ERROR,
        error,
      }),
    ).toEqual({
      message: null,
      error,
    });
  });
});
