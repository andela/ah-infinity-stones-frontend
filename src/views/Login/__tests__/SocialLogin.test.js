import React from 'react';
import { SocialLogin } from '../SocialLogin';


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
