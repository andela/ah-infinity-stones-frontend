/* eslint-disable no-unused-vars */
/* eslint-disable import/default */
import * as types from '../../redux/actions/actionTypes';
import * as actions from '../../redux/actions/articleActions';
import reducer from '../../redux/reducers/articleReducer';
import { rateArticle } from '../../services/articlePayload';

describe('Action creators', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      art_slug: 'promaster-is-back-from-shanghai-00rf0e0r09r0',
      rating: 4,
    };
  });

  it('should create an action to rate an article', () => {
    const expectedAction = {
      type: types.RATE_ARTICLE,
      payload,
    };
    expect(actions.rateArticleAction(payload)).toEqual(expectedAction);
  });

  it('should return an action for successful article rating', () => {
    const expectedAction = {
      type: types.RATE_ARTICLE_SUCCESS,
      payload,
    };
    expect(actions.rateArticleSuccessAction(payload)).toEqual(expectedAction);
  });

  it('should return an action for article rating failure', () => {
    const expectedAction = {
      type: types.RATE_ARTICLE_FAILURE,
      payload,
    };
    expect(actions.rateArticleFailureAction(payload)).toEqual(expectedAction);
  });
});

describe('Reducers', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      art_slug: 'james-is-back-from-china-ijk0rf0e0r09r0',
      rating: 3,
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      article: {},
      articles: [],
      error: {},
      header: 'ALL ARTICLES',
      specificArticle: {},
      rated: false,
      searchErrorMsg: '',
      rate: 0,
    });
  });

  it('can handle RATE_ARTICLE', () => {
    expect(
      reducer(undefined, {
        type: types.RATE_ARTICLE,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: {},
      header: 'ALL ARTICLES',
      specificArticle: {},
      rated: false,
      searchErrorMsg: '',
      rate: 3,
    });
  });

  it('should handle RATE_ARTICLE_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.RATE_ARTICLE_SUCCESS,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: {
        art_slug: 'james-is-back-from-china-ijk0rf0e0r09r0',
        rating: 3,
      },
      header: 'ALL ARTICLES',
      specificArticle: {},
      searchErrorMsg: '',
      rate: 3,
      rated: true,
    });
  });

  it('should handle RATE_ARTICLE_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: types.RATE_ARTICLE_FAILURE,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: {
        art_slug: 'james-is-back-from-china-ijk0rf0e0r09r0',
        rating: 3,
      },
      header: 'ALL ARTICLES',
      specificArticle: {},
      rate: 3,
      searchErrorMsg: '',
      rated: false,
    });
  });
});

describe('Test article rating Api call', () => {
  let payload = {};
  let response = {};
  beforeEach(() => {
    payload = {
      art_slug: 'learn-react-in-two-months-3eaAFEAGEedese#',
      rating: 4,
    };
    response = rateArticle(payload);
  });

  it('A promise is returned from article rating api call', () => {
    expect(response).toBeTruthy();
  });

  it('Promise has data', () => {
    response.then((objects) => {
      expect(objects).toHaveLength(1);
    });
  });
});
