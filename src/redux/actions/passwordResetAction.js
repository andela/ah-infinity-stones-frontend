import {
  PASSWORD_RESET_START, PASSWORD_RESET_COMPLETE,
  PASSWORD_RESET_ERROR, PASSWORD_RESET_UPDATE_COMPLETE, PASSWORD_RESET_UPDATE_START,
  PASSWORD_RESET_UPDATE_ERROR,

} from './actionTypes';

export const requestPasswordResetStart = email => ({
  type: PASSWORD_RESET_START,
  email,
});
export const resetPasswordComplete = data => ({
  type: PASSWORD_RESET_COMPLETE,
  data,
});

export const requestPasswordResetError = error => ({
  type: PASSWORD_RESET_ERROR,
  error: error.response.data.message,
});

export const requestPasswordResetUpdateStart = password => ({
  type: PASSWORD_RESET_UPDATE_START,
  password,
});

export const resetPasswordUpdateComplete = data => ({
  type: PASSWORD_RESET_UPDATE_COMPLETE,
  data,
});

export const resetPasswordUpdaterror = error => ({
  type: PASSWORD_RESET_UPDATE_ERROR,
  error: error.response,
});
