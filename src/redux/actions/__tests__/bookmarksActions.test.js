import { requestBookmarks, bookmarksSuccess, bookmarksFailure } from '../bookmarksActions';
import { BOOKMARKS_SUCCESS, BOOKMARKS_FAILURE } from '../actionTypes';


describe('Bookmarks actions', () => {
  it('sends action of type REQUEST_BOOKMARKS', () => {
    const bookmarkAction = requestBookmarks();
    expect(bookmarkAction.type).toEqual('REQUEST_BOOKMARKS');
  });
  it('Should create a bookmark success action', () => {
    const successAction = {
      type: BOOKMARKS_SUCCESS,
      data: {},
    };
    const result = bookmarksSuccess({});
    expect(successAction).toEqual(result);
  });

  it('Should create a bookmark failure action', () => {
    const failureAction = {
      type: BOOKMARKS_FAILURE,
      error: {},
    };
    const result = bookmarksFailure({});
    expect(failureAction).toEqual(result);
  });
});
