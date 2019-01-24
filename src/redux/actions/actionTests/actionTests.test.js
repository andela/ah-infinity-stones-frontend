import * as actions from '../passwordResetAction';
import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_COMPLETE,
  PASSWORD_RESET_ERROR,
  PASSWORD_RESET_UPDATE_START,
  PASSWORD_RESET_UPDATE_COMPLETE,
  PASSWORD_RESET_UPDATE_ERROR,
} from '../actionTypes';

describe('startReset', () => {
  it('should start reset email send', () => {
    const email = 'domisemak@yahoo.co.uk';
    const expectedAction = {
      type: PASSWORD_RESET_START,
      email,
    };
    expect(actions.requestPasswordResetStart(email)).toEqual(expectedAction);
  });
});

describe('completeReset', () => {
  it('should complete email send process', () => {
    const data = 'reset successful';
    const expectedAction = {
      type: PASSWORD_RESET_COMPLETE,
      data,
    };
    expect(actions.resetPasswordComplete(data)).toEqual(expectedAction);
  });
});

describe('errorReset', () => {
  it('should through an error if if email not sent', () => {
    const error = {
      response: {
        data: {
          message: 'The email sending failed',
        },
      },
    };

    const expectedAction = {
      type: PASSWORD_RESET_ERROR,
      error: error.response.data.message,
    };

    expect(actions.requestPasswordResetError(error)).toEqual(expectedAction);
  });
});

describe('passwordReset', () => {
  it('should accept the password from the user', () => {
    const password = 'password';
    const expectedAction = {
      type: PASSWORD_RESET_UPDATE_START,
      password,
    };
    expect(actions.requestPasswordResetUpdateStart(password)).toEqual(expectedAction);
  });
});

describe('resetUpdateComplete', () => {
  it('should complete password update process', () => {
    const data = 'update successful';
    const expectedAction = {
      type: PASSWORD_RESET_UPDATE_COMPLETE,
      data,
    };
    expect(actions.resetPasswordUpdateComplete(data)).toEqual(expectedAction);
  });
});

describe('errorReset', () => {
  it('should through an error if password reset fails', () => {
    const error = {
      response: {
        data: {
          message: 'Password reset failed',
        },
      },
    };

    const expectedAction = {
      type: PASSWORD_RESET_UPDATE_ERROR,
      error: error.response,
    };

    expect(actions.resetPasswordUpdaterror(error)).toEqual(expectedAction);
  });
});
