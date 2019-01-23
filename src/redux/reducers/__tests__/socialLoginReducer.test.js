import SocialLoginReducer from '../socialLoginReducer';
import {
  SOCIAL_LOGIN_REQUEST,
} from '../../actions/actionTypes';


describe('Social Login Reducer', () => {
  it('Should handle social auth request', () => {
    const action = {
      type: SOCIAL_LOGIN_REQUEST,
      data: {},
    };
    const expectedState = {
      user: {
        email: '', username: '', token: '', error: null, success: null,
      },
    };
    const result = SocialLoginReducer(undefined, action);
    expect(result).toEqual(expectedState);
  });
});
