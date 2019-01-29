import bookmarkReducer from '../bookmarkReducer';
import { BOOKMARK_REQUEST } from '../../actions/actionTypes';


describe('Bookmark Reducer', () => {
  let payload = '';

  beforeEach(() => {
    payload = 'remmy-is-here';
  });
  it('should return the initial state', () => {
    expect(bookmarkReducer(undefined, {})).toEqual(
      {
        message: null,
        error: null,
      },
    );
  });

  it('should handle BOOKMARK_REQUEST', () => {
    expect(
      bookmarkReducer(undefined, {
        type: BOOKMARK_REQUEST,
        payload,
      }),
    ).toEqual(
      {
        message: null,
        error: null,
      },
    );
  });
});
