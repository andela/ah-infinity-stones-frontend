/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { call } from 'redux-saga/effects';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import store from '../../redux/store';
import Article from './index';
import like from '../../services/like';
import { sendLike } from '../../redux/actions/likeActions';
import { likeSaga } from '../../redux/sagas/likeSagas';
import likeReducer from '../../redux/reducers/likeReducer';
import reducer from '../../redux/reducers/articleReducer';
import * as types from '../../redux/actions/actionTypes';
import Articles from '../Articles/index';

configure({ adapter: new Adapter() });
describe('Single Article Component', () => {
  let articleContainer;
  let reduxArticle;
  const match = {
    params: {
      art_slug: 'js-testing',
    },
  };
  const article = {
    art_slug: 'smileys',
    title: 'smileys',
    rating_average: 4,
    description: 'emoji are working',
    body: '<p>there…y are thats awespome</p>',
    read_time: 1,
  };
  beforeEach(() => {
    articleContainer = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Article match={match} article={article} />
        </BrowserRouter>
      </Provider>,
    );
  });
  it('Article renders successfully', () => {
    expect(articleContainer.exists()).toEqual(true);
  });
  it('render 1 Article component', () => {
    expect(articleContainer).toHaveLength(1);
  });
  it('article component should match snapshot', () => {
    expect(articleContainer.getElements()).toMatchSnapshot();
  });
});

describe('Article Reducer', () => {
  const payload = {
    art_slug: 'welcome-to-juja',
    title: 'The home of legends',
  };

  it('can handle CREATE_ARTICLE_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.CREATE_ARTICLE_SUCCESS,
        payload,
      }),
    ).toEqual({
      article: payload,
      articles: [],
      error: {},
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
  it('can handle CREATE_ARTICLE_FAILURE', () => {
    const payload = 'Could not create the article at this time';
    expect(
      reducer(undefined, {
        type: types.CREATE_ARTICLE_FAILURE,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: payload,
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
  it('can handle GET_ALL_ARTICLES_SUCCESS', () => {
    const payload = 'Here are all the articles';
    expect(
      reducer(undefined, {
        type: types.GET_ALL_ARTICLES_SUCCESS,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: payload,
      error: {},
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
  it('can handle GET_ALL_ARTICLES_FAILURE', () => {
    const payload = 'No articles found';
    expect(
      reducer(undefined, {
        type: types.GET_ALL_ARTICLES_FAILURE,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: payload,
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
  it('can handle GET_ONE_ARTICLE_SUCCESS', () => {
    const payload = 'This is one article';
    expect(
      reducer(undefined, {
        type: types.GET_ONE_ARTICLE_SUCCESS,
        payload,
      }),
    ).toEqual({
      article: payload,
      articles: [],
      error: {},
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
  it('can handle GET_ONE_ARTICLE_FAILURE', () => {
    const payload = 'Could not fetch the article';
    expect(
      reducer(undefined, {
        type: types.GET_ONE_ARTICLE_FAILURE,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: payload,
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
  it('can handle UPDATE_ARTICLE', () => {
    const payload = 'Could not update the article';
    expect(
      reducer(undefined, {
        type: types.UPDATE_ARTICLE,
        payload,
      }),
    ).toEqual({
      article: payload,
      articles: [],
      error: {},
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
  it('can handle DELETE_ARTICLE', () => {
    const payload = 'journey-to-the-moon';
    expect(
      reducer(undefined, {
        type: types.DELETE_ARTICLE,
        payload,
      }),
    ).toEqual({
      article: {},
      articles: [],
      error: {},
      header: 'ALL ARTICLES',
      rate: 0,
      rated: false,
      searchErrorMsg: '',
      specificArticle: {},
    });
  });
});
describe('Like functionality', () => {
  it('sends action of type SEND_LIKE', () => {
    const likeAction = sendLike({ like: 'False' }, 'sample-slug');
    expect(likeAction.type).toEqual('SEND_LIKE');
  });
  it('works with sagas', () => {
    const likeData = { likeData: { like: 'False' }, artSlug: 'sample-slug' };
    const generator = likeSaga(likeData);
    expect(generator.next().value).toEqual(call(like, likeData.likeData, likeData.artSlug));
  });
  it('has an initial state', () => {
    expect(likeReducer(undefined, { type: undefined })).toEqual({
      success: null,
      error: null,
      dislikeCount: null,
      likeCount: null,
      liked: null,
      disliked: null,
    });
  });
  it('it can send a like/dislike request', () => {
    expect(
      likeReducer(undefined, {
        type: types.SEND_LIKE,
      }),
    ).toEqual({
      success: null,
      error: null,
      dislikeCount: null,
      likeCount: null,
      liked: null,
      disliked: null,
    });
  });

  it('Like endpoint needs auth', async () => {
    const slug = 'like-this';
    const likeData = { likeData: { like: 'False' } };
    jest.setTimeout(50000);
    const data = await like(likeData, slug);
    expect(data.detail).toEqual('Your token is invalid. ');
  });

  it('can like an article successfully', () => {
    const resData = {
      Message: 'Thank you PromasterGuru12 for your opinion ',
      liked: true,
      likes_count: 1,
      disliked: false,
      dislikes_count: 0,
    };
    expect(
      likeReducer(undefined, {
        type: types.LIKE_SUCCESS,
        data: resData,
      }),
    ).toEqual({
      success: 'Thank you PromasterGuru12 for your opinion ',
      error: null,
      dislikeCount: 0,
      likeCount: 1,
      liked: true,
      disliked: false,
    });
  });
  it('can handle like error', () => {
    const error = 'Could not like this article';
    expect(
      likeReducer(undefined, {
        type: types.LIKE_ERROR,
        error,
      }),
    ).toEqual({
      success: null,
      error: 'Could not like this article',
      dislikeCount: null,
      likeCount: null,
      liked: null,
      disliked: null,
    });
  });
});
