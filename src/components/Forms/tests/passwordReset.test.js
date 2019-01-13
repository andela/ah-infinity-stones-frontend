import React from 'react';

// component to be tested
import { ResetPasswordForm } from '../PasswordResetform/index';

describe('<ResetPasswordForm />', () => {
  describe('onClick()', () => {
    it('Successfully calls the onClick handler', () => {
      const props = {
        requestPasswordResetUpdateStart: jest.fn(),
      };

      const preventDefault = jest.fn();
      const wrapper = shallow(<ResetPasswordForm {...props} />);
      wrapper.find('.button-success').simulate('click', { preventDefault });

      expect(preventDefault.mock.calls.length).toEqual(1);
    });
  });
});
