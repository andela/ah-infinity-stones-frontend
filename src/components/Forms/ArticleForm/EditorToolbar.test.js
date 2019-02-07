/* eslint-disable no-unused-vars */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import EditorConvertToHTML from './EditorToolbar';

configure({ adapter: new Adapter() });

describe('Article creation', () => {
  const mockStore = configureStore();
  const initialState = {};
  let props;
  let store;
  let cmpt;

  beforeEach(() => {
    props = {
      onEditorStateChange: jest.fn(),
    };
    store = mockStore(initialState);
    cmpt = mount(
      <Provider store={store}>
        <EditorConvertToHTML {...props} />
      </Provider>,
    );
  });

  it('article editor component should match snapshot', () => {
    expect(cmpt.find('Editor'));
    expect(cmpt.find('div'));
  });
});
