import React from 'react';
import { SocialLogin } from '../SocialLogin';
// import * as actions from '../../../redux/actions/actionTypes';
import * as types from '../../../redux/actions/actionTypes';
import reducer from '../../../redux/reducers/socialLoginReducer';

describe('Social Login Component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      socialLoginRequest: jest.fn(),
    };

    wrapper = shallow(<SocialLogin {...props} />);
    wrapper.instance().handleTwitter = jest.fn();
    wrapper.instance().handleFacebookLogin = jest.fn();
    wrapper.instance().handleGoogleLogin = jest.fn();
    wrapper.instance().forceUpdate();
  });

  it('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should login using Twitter', () => {
    const button = wrapper.find('#twitter');
    const preventDefault = jest.fn();
    button.simulate('click', { preventDefault });
    expect(wrapper.instance().handleTwitter).toHaveBeenCalled();
  });

  it('Should login using Facebook', () => {
    const button = wrapper.find('.kep-login-facebook');
    const preventDefault = jest.fn();

    button.simulate('click', { preventDefault });
    expect(wrapper.instance().handleFacebookLogin).toHaveBeenCalled();
  });
});

describe('Reducers', () => {
  let data = {};

  beforeEach(() => {
    data = {
      user: {
        email: 'infinitystones@gmail.com',
        username: 'InfinityStones',
        token:
          'ya29.Glt5Bg4TQaRnYfqzxr6K0Rom6VxDUYBaxWpJECodmyCI16fYG_BNY7SLm_iToTnjKo_xzw_RWuSSx6YZMqcu2S7JQY_pTxg9Td-nrr5AmrqkSwal6Fts62BP55jn',
      },
    };
  });

  it('User can log in sccessfully via social login', () => {
    expect(
      reducer(undefined, {
        type: types.SOCIAL_LOGIN_SUCCESS,
        data,
      }),
    ).toEqual({
      email: 'infinitystones@gmail.com',
      success: true,
      token:
        'ya29.Glt5Bg4TQaRnYfqzxr6K0Rom6VxDUYBaxWpJECodmyCI16fYG_BNY7SLm_iToTnjKo_xzw_RWuSSx6YZMqcu2S7JQY_pTxg9Td-nrr5AmrqkSwal6Fts62BP55jn',
      user: {
        email: '',
        error: null,
        success: null,
        token: '',
        username: '',
      },
      username: 'InfinityStones',
    });
  });
  it('Social login failure is captured', () => {
    expect(
      reducer(undefined, {
        type: types.SOCIAL_LOGIN_ERROR,
        data,
      }),
    ).toEqual({
      error: undefined,
      user: {
        email: '',
        error: null,
        success: null,
        token: '',
        username: '',
      },
    });
  });
});
