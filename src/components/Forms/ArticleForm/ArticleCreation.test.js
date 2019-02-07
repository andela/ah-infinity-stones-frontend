/* eslint-disable no-unused-vars */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ArticleCreation from '.';

configure({ adapter: new Adapter() });

describe('Article creation', () => {
  const mockStore = configureStore();
  const initialState = {};
  let props;
  let store;
  let cmpt;

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
    };
    store = mockStore(initialState);
    cmpt = mount(
      <Provider store={store}>
        <ArticleCreation {...props} />
      </Provider>,
    );
  });

  it('article creation component has elements', () => {
    expect(cmpt.find('.container'));
  });
});
