import React from 'react';
import { SocialLogin } from '../SocialLogin';

describe('Social Login Component', () => {
  const props = {
    socialLoginRequest: jest.fn(),
  };
  const wrapper = shallow(<SocialLogin {...props} />);

  it('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
