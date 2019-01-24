import { PASSWORD_RESET_START } from '../../actions/actionTypes';
import passwordReset from '../passwordResetReducer';
import reducer from '../passwordResetReducer';

describe('Password reset Reducer', () => {
  // let data = {};

  // beforeEach('Intialize variables', () => {
  //   data = {
  //     password: 'Someone@12',
  //     confirmpassword: 'Someone@2019',
  //   };
  // });

  it('should return the initial state', () => {
    expect(passwordReset(undefined, {})).toEqual(
      {
        loading: false,
        error: null,
        success: null,
      },
    );
  });

  it('should handle PASSWORD_RESET_START', () => {
    expect(reducer(undefined, {
      type: PASSWORD_RESET_START,
    })).toEqual({
      error: null,
      loading: true,
      success: null,
    });
  });
});
