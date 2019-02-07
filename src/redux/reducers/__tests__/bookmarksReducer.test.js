import bookmarksReducer from '../bookmarksReducer';
import * as types from '../../actions/actionTypes';

describe('Bookmarks reducer', () => {
  it('has an initial state', () => {
    expect(bookmarksReducer(undefined, { type: undefined })).toEqual({
      bookmarks: [],
      error: '',
    });
  });
  it('it can send a get bookmarks request', () => {
    expect(
      bookmarksReducer(undefined, {
        type: types.REQUEST_BOOKMARKS,
      }),
    ).toEqual({
      bookmarks: [],
      error: '',
    });
  });
  it('it can send a get bookmarks request', () => {
    const data = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          id: 257,
          user: 78,
          article: 2,
          article_slug: 'proper-file-structure-python-import-statement',
          article_title: 'Proper File Structure & Python Import Statement',
          article_author: 'Ronny',
          created_at: '2019-02-07T17:47:40.204674+03:00',
        },
      ],
    };
    expect(
      bookmarksReducer(undefined, {
        type: types.BOOKMARKS_SUCCESS,
        data,
      }),
    ).toEqual({
      bookmarks: data.results,
      error: '',
    });
  });
  it('it can handle bookmarks error', () => {
    const error = 'Could not bookmark this article';
    expect(
      bookmarksReducer(undefined, {
        type: types.BOOKMARKS_FAILURE,
        error,
      }),
    ).toEqual({
      bookmarks: [],
      error,
    });
  });
});
