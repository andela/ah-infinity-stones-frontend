/* global it, expect, mount */
/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { call } from 'redux-saga/effects';
import store from '../../redux/store';
import Login from '.';
import loginReducer from '../../redux/reducers/loginReducer';
import * as types from '../../redux/actions/actionTypes';
import { loginSaga } from '../../redux/sagas/loginSaga';
import loginFunc from '../../services/login';
import { handleSuccess, errorClass } from '.';


describe('Login Component', () => {
  let loginContainer;
  let reduxLogin;
  beforeEach(() => {
    loginContainer = shallow(<Login name="login" />);
    reduxLogin = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('form renders successfully', () => {
    expect(loginContainer.exists()).toEqual(true);
  });
  it('Should match snapshot', () => {
    expect(loginContainer).toMatchSnapshot();
  });
  it('it renders props correctly', () => {
    const login = shallow(<Login name="login" />);
    expect(login.instance().props.name).toBe('login');
  });
  it('login should render with redux store', () => {
    expect(reduxLogin.exists()).toEqual(true);
  });
  it('it should render a form', () => {
    const form = reduxLogin.find('form');
    expect(form.exists()).toEqual(true);
  });
  it('it should render submit button', () => {
    const button = reduxLogin.find('button');
    expect(button.exists()).toEqual(true);
  });
  it('form should load with 2 input fields', () => {
    const input = reduxLogin.find('input');
    expect(input.length).toEqual(2);
  });
  it('input value is changeable', () => {
    const input = reduxLogin.find('input').at(1);
    input.value = 'hello';
    expect(input.value).toEqual('hello');
  });
});

describe('Login Reducer', () => {
  it('has an initial state', () => {
    expect(loginReducer(undefined, { type: 'unexpected' })).toEqual({
      error: null, loading: false, success: null, isLoggedIn: false,
    });
  });
  it('it can send a login request and update state', () => {
    expect(loginReducer(undefined, {
      type: types.REQUEST_LOGIN,
    })).toEqual({
      error: null, loading: true, success: null, isLoggedIn: false,
    });
  });
});

describe('Login Sagas', () => {
  const userInfo = {
    email: 'test@mail.com',
    password: 'dddddd',
  };
  const generator = loginSaga(userInfo);
  const { user } = userInfo;
  it('Should return user api call', () => {
    expect(generator.next().value).toEqual(call(loginFunc, user));
  });
});

describe('Login makes API fetch', () => {
  const userInfo = {
    email: 'test@mail.com',
    password: 'dddddd',
  };
  it('should return a promise', () => {
    expect(loginFunc()).toBeTruthy();
  });
  it('should return expected data', () => {
    loginFunc(userInfo).then((objects) => {
      expect(objects).toHaveLength(1);
    });
  });
  describe('Login Helpers', () => {
    it('it should redirect', () => {
      const response = Login.handleSuccess('Success');
      expect(response.props.to).toEqual('/');
    });
    it('It should return css error class', () => {
      const response = Login.errorClass('invalid email');
      expect(response).toEqual('is-invalid');
    });
  });
});
