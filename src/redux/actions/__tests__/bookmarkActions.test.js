import {
  bookmarkRequest,
  bookmarkSuccess,
  bookmarkError,
} from '../bookmarkActions';
import {
  BOOKMARK_REQUEST,
  BOOKMARK_ERROR,
  BOOKMARK_SUCCESS,
} from '../actionTypes';

describe('Bookmark Actions', () => {
  it('Should return correct request action', () => {
    const expectedAction = {
      type: BOOKMARK_REQUEST,
      slug: 'remmy',
    };
    const result = bookmarkRequest('remmy');
    expect(expectedAction).toEqual(result);
  });

  it('Should create an action for bookmark success', () => {
    const expectedAction = {
      type: BOOKMARK_SUCCESS,
      data: {},
    };
    const result = bookmarkSuccess({});
    expect(expectedAction).toEqual(result);
  });

  it('Should create an action for bookmark error', () => {
    const expectedAction = {
      type: BOOKMARK_ERROR,
      error: {},
    };
    const result = bookmarkError({});
    expect(expectedAction).toEqual(result);
  });
});
