import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '.';

describe('<Profile />', () => {
  let cmpt;
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  beforeEach(() => {
    cmpt = shallow(
      <Provider store={store}>
        {' '}
        <Profile />
        {' '}
      </Provider>,
    );
  });
  it('renders 1 Profile component', () => {
    expect(cmpt).toHaveLength(1);
  });

  it('test snapshot', () => {
    expect(cmpt).toMatchSnapshot();
  });

  it('component has a section tag', () => {
    expect(cmpt.find('section'));
  });

  it('component has a strong tag', () => {
    expect(cmpt.find('strong'));
  });
});
