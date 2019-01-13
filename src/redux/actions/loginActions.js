import { REQUEST_LOGIN, RECEIVE_LOGIN, LOGIN_ERROR } from './actionTypes';

export const requestLogin = user => ({
  type: REQUEST_LOGIN,
  user,
});
export const receiveLogin = data => ({
  type: RECEIVE_LOGIN,
  data,
});
export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});
