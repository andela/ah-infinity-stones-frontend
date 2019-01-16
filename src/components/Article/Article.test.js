/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { call } from 'redux-saga/effects';
import store from '../../redux/store';
import Article from './index';
import like from '../../services/like';
import { sendLike } from '../../redux/actions/likeActions';
import { likeSaga } from '../../redux/sagas/likeSagas';
import likeReducer from '../../redux/reducers/likeReducer';
import * as types from '../../redux/actions/actionTypes';
import Articles from '../Articles/index';

describe('Single Article Component', () => {
  let articleContainer;
  let reduxArticle;
  let reduxArticles;
  beforeEach(() => {
    articleContainer = shallow(<Article />);
    reduxArticles = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Articles />
        </BrowserRouter>
      </Provider>,
    );
    reduxArticle = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Article />
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

describe('single article mount', () => {
  let reduxArticle;
  const match = {
    params: {
      art_slug: 'js-testing',
    }
  };
  const article = {
    art_slug: 'smileys',
    title: 'smileys',
    description: 'emoji are working',
    body: '<p>there…y are thats awespome</p>',
    read_time: 1
  };
  it('Article renders successfully', () => {
    // let article_div = articleContainer.find('div')
    reduxArticle = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Article match={match} article={article} />
        </BrowserRouter>
      </Provider>,
    );
    expect(reduxArticle.exists()).toEqual(true);
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
    expect(generator.next().value).toEqual(
      call(like, likeData.likeData, likeData.artSlug),
    );
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
      })
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
    const data = await like(likeData, slug);
    expect(data.detail).toEqual('Your token is invalid. ');
  });
});
