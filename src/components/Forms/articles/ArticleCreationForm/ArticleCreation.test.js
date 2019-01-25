/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import allReducers from '../../../../redux/reducers/index';
import store from '../../../../redux/store';
import ArticleCreationForm from './index';
import * as actions from '../../../../redux/actions/articleActions';
import { CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAILURE } from '../../../../redux/actions/actionTypes';


describe('async actions', () => {
  beforeEach(() => {
    const middleware = createSagaMiddleware();
    const store = createStore(
      allReducers, applyMiddleware(middleware),
    );
    const article = '{body: "You have to pray and play", description: "Ever wonder how?", title: "winning the jackpot", tags: "sportpesa"}';
    const expectedAction = {
      type: CREATE_ARTICLE,
      payload: article,
    };
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it('creates CREATE_ARTICLE_SUCCESS when fetching articles has been done', () => {
    const article = '{body: "You have to pray and play", description: "Ever wonder how?", title: "winning the jackpot", tags: "sportpesa"}';
    const articleSuccess = '{art_slug: "winning-the-jackpot", author: "Ronny",body: "You have to pray and play", description: "Ever wonder how?"}';
    const error = '{type: "cors", url: "https://cors-anywhere.herokuapp.com/ah-infinites-staging.herokuapp.com/api/articles", redirected: false, status: 500, ok: false';

    fetchMock.getOnce('/articles', {
      body: article,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJvbm55bWFnZWhAZ21haWwuY29tIiwidXNlcm5hbWUiOiJSb25ueSIsImV4cCI6MTU1MDQzMTkwM30.BFFFIlWsNj6mpKijYeDqi7rS-uK39Z4tLTXcivZyHHI',
      },
    });
    const expectedActions = [
      {
        type: CREATE_ARTICLE,
        payload: article,
      },
      {
        type: CREATE_ARTICLE_SUCCESS,
        payload: articleSuccess,
      },
      {
        type: CREATE_ARTICLE_FAILURE,
        payload: error,
      },
    ];
    const mockStore = configureMockStore();
    const myStore = mockStore({ article: [] });

    const res = myStore.dispatch(actions.createArticleAction(article));
    const res2 = myStore.dispatch(actions.createArticleSuccessAction(articleSuccess));
    expect(res).toEqual(expectedActions[0]);
    expect(res2).toEqual(expectedActions[1]);
  });
});
describe('Article Creation Component', () => {
  let articleCreationContainer;
  let reduxArticleCreationForm;
  beforeEach(() => {
    articleCreationContainer = shallow(<ArticleCreationForm />);
    reduxArticleCreationForm = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ArticleCreationForm />
        </BrowserRouter>
      </Provider>,
    );
  });
  it('ArticleCreationForm renders successfully', () => {
    expect(articleCreationContainer.exists()).toEqual(true);
  });
  it('render 1 Article Creation component', () => {
    expect(articleCreationContainer).toHaveLength(1);
  });
  it('article creation component should match snapshot', () => {
    expect(articleCreationContainer.getElements()).toMatchSnapshot();
  });
});

describe('Action Creators', () => {
  let articleCreationContainer;
  let reduxArticleCreationForm;
  beforeEach(() => {
    articleCreationContainer = shallow(<ArticleCreationForm />);
    reduxArticleCreationForm = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ArticleCreationForm />
        </BrowserRouter>
      </Provider>,
    );
  });
  it('should send a POST request all', () => {
    const article = '{body: "You have to pray and play", description: "Ever wonder how?", title: "winning the jackpot", tags: "sportpesa"}';
    const expectedAction = {
      type: CREATE_ARTICLE,
      payload: article,
    };
    expect(actions.createArticleAction(article)).toEqual(expectedAction);
  });
  it('should update the article to the state if successful', () => {
    const article = '{art_slug: "how-to-make", author: "Ronny",body: "You have to pray", description: "Ever wonder how?"}';
    const expectedAction = {
      type: CREATE_ARTICLE_SUCCESS,
      payload: article,
    };
    expect(actions.createArticleSuccessAction(article)).toEqual(expectedAction);
  });
  it('should catch error', () => {
    const error = '{type: "cors", url: "https://cors-anywhere.herokuapp.com/ah-infinites-staging.herokuapp.com/api/articles", redirected: false, status: 500, ok: false';
    const expectedAction = {
      type: CREATE_ARTICLE_FAILURE,
      payload: error,
    };
    expect(actions.createArticleFailureAction(error)).toEqual(expectedAction);
  });
});
