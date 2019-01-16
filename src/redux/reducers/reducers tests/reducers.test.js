import { PASSWORD_RESET_START } from '../../actions/actionTypes';
import reducer from '../passwordResetReducer';


it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
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
