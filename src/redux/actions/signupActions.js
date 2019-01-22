import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';

export const signupRequestAction = payload => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupSuccessAction = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailureAction = payload => ({
  type: SIGNUP_FAILURE,
  payload,
});
