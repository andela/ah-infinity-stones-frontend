import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from '.';
import * as searchTypes from '../../redux/actions/actionTypes';
import * as searchActions from '../../redux/actions/articleActions';
import reducer from '../../redux/reducers/articleReducer';
import { searchArticle } from '../../services/articlePayload';

describe('<Navbar />', () => {
  let mycomponent;
  const initialState = {};
  const mockStore = configureStore();
  const createStore = mockStore(initialState);

  beforeEach(() => {
    mycomponent = shallow(
      <Provider store={createStore}>
        {' '}
        <Search />
        {' '}
      </Provider>,
    );
  });

  it('Nav compoment should match snapshot', () => {
    expect(mycomponent).toMatchSnapshot();
  });

  it('Navbar component contains a state', () => {
    expect(mycomponent.find('state'));
  });
});

describe('Action creators', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      author: '',
      title: '',
      tag: '',
      q: '',
    };
  });

  it('can create an action to send search request', () => {
    const expectedAction = {
      type: searchTypes.SEARCH_ARTICLES_REQUEST,
      payload,
    };
    expect(searchActions.searchArticlesRequest(payload)).toEqual(expectedAction);
  });

  it('can create a successful search request', () => {
    const expectedAction = {
      type: searchTypes.SEARCH_ARTICLES_SUCCESS,
      payload,
    };
    expect(searchActions.searchArticlesSuccessAction(payload)).toEqual(expectedAction);
  });

  it('can create a failing search request', () => {
    const expectedAction = {
      type: searchTypes.SEARCH_ARTICLES_FAILURE,
      payload,
    };
    expect(searchActions.searchArticlesFailureAction(payload)).toEqual(expectedAction);
  });
});

describe('Reducers', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      author: '',
      title: '',
      tag: '',
      q: '',
    };
  });

  it('should handle SEARCH_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: searchTypes.SEARCH_ARTICLES_REQUEST,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: {
        author: '',
        q: '',
        tag: '',
        title: '',
      },
      error: {},
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });

  it('should handle SEARCH_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: searchTypes.SEARCH_ARTICLES_SUCCESS,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: ['', '', '', ''],
      error: {},
      header: 'SEARCH RESULTS',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });

  it('should handle SEARCH_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: searchTypes.SEARCH_ARTICLES_FAILURE,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: {},
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: 'No article matches your search, please try again later',
      specificArticle: {},
    });
  });
});
describe('Test Api call', () => {
  const data = {
    author: 'Ronny',
    title: '',
    tag: 'emonji',
    q: 'Python',
  };
  const promise = searchArticle(data);

  it('The search api call should return a response', () => {
    expect(promise).toBeTruthy();
  });
});
