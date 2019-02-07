/* eslint-disable no-unused-vars */
/* eslint-disable import/default */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { call } from 'redux-saga/effects';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import store from '../../redux/store';
import * as types from '../../redux/actions/actionTypes';
import * as actions from '../../redux/actions/articleActions';
import reducer from '../../redux/reducers/articleReducer';
import { reportArticle } from '../../services/articlePayload';
import ReportArticle from './ReportArticle';

configure({ adapter: new Adapter() });
describe('Action creators', () => {
  let payload = {};
  beforeEach(() => {
    payload = {
      artSlug: 'promaster-is-back-from-shanghai-00rf0e0r09r0',
      report_msg: 'Spam',
    };
  });
  it('should create an action to report an article', () => {
    const expectedAction = {
      type: types.REPORT_ARTICLE,
      payload,
    };
    expect(actions.reportArticleAction(payload)).toEqual(expectedAction);
  });
});

describe('Test article reporting Api call', () => {
  let payload = {};
  let response = {};
  beforeEach(() => {
    payload = {
      artSlug: 'learn-react-in-two-months-3eaAFEAGEedese#',
      report_msg: 'Spam',
    };
    response = reportArticle(payload);
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
describe('Report Article component', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  let store = '';
  let component;
  const props = {
    onChange: jest.fn(),
    props: {},
    state: {},
    handleReport: jest.fn(),
  };

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<ReportArticle {...props} />);
  });

  it('article report component should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('shoud render subcomponents', () => {
    expect(component.find('#reportArticleModal'));
  });
  it('has div elements', () => {
    expect(component.find('div')).toHaveLength(6);
  });
});
