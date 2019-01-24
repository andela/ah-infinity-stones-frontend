import {
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_ERROR,
} from './actionTypes';

export const socialLoginRequest = (platform, data = null) => ({
  type: SOCIAL_LOGIN_REQUEST,
  platform,
  data,
});

export const socialLoginSuccess = data => ({
  type: SOCIAL_LOGIN_SUCCESS,
  data,
});

export const socialLoginError = data => ({
  type: SOCIAL_LOGIN_ERROR,
  data,
});
