import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Profile from './containers/ProfileItem';
import * as types from '../../redux/actions/actionTypes';
import * as actions from '../../redux/actions/profileActions';
import reducer from '../../redux/reducers/profileReducer';
import Compo from './containers/Button';

describe('<Profile />', () => {
  let cmpt;
  let button;
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  beforeEach(() => {
    button = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Compo />
        </BrowserRouter>
      </Provider>,
    );
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

  it('Button should match snapshot', () => {
    expect(button).toMatchSnapshot();
  });
});

describe('Action creators', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      firstname: 'Promaster',
      lastname: 'Paul',
      birthday: '08/09/2000',
      image: 'http://ah-infinity-stones-frontend.herokuapp.com/static/media/logo.f64cc8b5.png',
      bio: 'A famous famer in laikipia',
    };
  });

  it('should update user profile', () => {
    const expectedAction = {
      type: types.UPDATE_PROFILE,
      payload,
    };
    expect(actions.updateProfile(payload)).toEqual(expectedAction);
  });
  it('should return user profile', () => {
    const expectedAction = {
      type: types.GET_PROFILE,
    };
    expect(actions.getProfile(payload)).toEqual(expectedAction);
  });
});
describe('Reducers', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      firstname: 'James',
      lastname: 'Mwangi',
      birthday: '05/11/2001',
      image: 'http://ah-infinity-stones-frontend.herokuapp.com/static/media/logo.f64cc8b5.png',
      bio: 'James AKA Jymo the hacker',
    };
  });

  it('should receive profile data', () => {
    expect(
      reducer(undefined, {
        type: types.PROFILE_RECEIVED,
        payload,
      }),
    ).toEqual({
      item: payload,
      loading: false,
      success: true,
      user: undefined,
    });
  });

  it('should get profile data', () => {
    expect(
      reducer(undefined, {
        type: types.GET_PROFILE,
        payload,
      }),
    ).toEqual({
      loading: true,
      success: false,
      user: {},
    });
  });

  it('should update profile with new data', () => {
    expect(
      reducer(undefined, {
        type: types.UPDATE_PROFILE,
        payload,
      }),
    ).toEqual({
      isUpdated: false,
      loading: false,
      success: false,
      user: {},
    });
  });
  it('should return a response after updating profile', () => {
    expect(
      reducer(undefined, {
        type: types.PROFILE_UPDATED,
        payload,
      }),
    ).toEqual({
      isUpdated: true,
      item: payload,
      loading: false,
      success: false,
      user: {},
    });
  });
});
