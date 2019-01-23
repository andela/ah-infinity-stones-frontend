import { socialLoginRequest, socialLoginSuccess, socialLoginError } from '../socialLoginActions';
import { SOCIAL_LOGIN_REQUEST, SOCIAL_LOGIN_ERROR, SOCIAL_LOGIN_SUCCESS } from '../actionTypes';

describe('Social Login Actions', () => {
  it('Should return correct request action', () => {
    const expectedAction = {
      type: SOCIAL_LOGIN_REQUEST,
      platform: 'twitter',
      data: null,
    };
    const result = socialLoginRequest('twitter');
    expect(expectedAction).toEqual(result);
  });

  it('Should create an action for social login success', () => {
    const expectedAction = {
      type: SOCIAL_LOGIN_SUCCESS,
      data: {},
    };
    const result = socialLoginSuccess({});
    expect(expectedAction).toEqual(result);
  });

  it('Should create an action for social login error', () => {
    const expectedAction = {
      type: SOCIAL_LOGIN_ERROR,
      data: {},
    };
    const result = socialLoginError({});
    expect(expectedAction).toEqual(result);
  });
});
