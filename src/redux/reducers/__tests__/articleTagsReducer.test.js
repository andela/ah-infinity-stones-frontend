import reducer from '../articleTagsReducer';
import * as types from '../../actions/actionTypes';

describe('Bookmark Reducer', () => {
  const data = 'Promaster-guru-0pkijsjea';
  it('can send  get article by tag request', () => {
    expect(
      reducer(undefined, {
        type: types.GET_BY_TAGS_REQUEST,
        data,
      }),
    ).toEqual({
      error: '',
      results: [],
    });
  });
  it('it can handle GET_BY_TAGS_SUCCESS', () => {
    const data = [
      {
        articles: 'This site has a lot of articles',
      },
    ];
    expect(
      reducer(undefined, {
        type: types.GET_BY_TAGS_SUCCESS,
        data,
      }),
    ).toEqual({
      error: '',
      results: data,
    });
  });
  it('it can handle  GET_BY_TAGS_ERROR', () => {
    const error = 'This site has no articles';
    expect(
      reducer(undefined, {
        type: types.GET_BY_TAGS_ERROR,
        error,
      }),
    ).toEqual({
      error,
      results: [],
    });
  });
});
