import reducer from '../passwordResetReducer';
import * as types from '../../actions/actionTypes';

describe('Reducers', () => {
  let data = {};

  beforeEach(() => {
    data = {
      password: 'Promaster@12',
    };
  });

  it('should send resend password link', () => {
    expect(
      reducer(undefined, {
        type: types.PASSWORD_RESET_UPDATE_START,
        data,
      }),
    ).toEqual({
      error: null,
      loading: true,
      success: null,
    });
  });

  it('can complete password reset actions', () => {
    expect(
      reducer(undefined, {
        type: types.PASSWORD_RESET_COMPLETE,
        data,
      }),
    ).toEqual({
      error: null,
      loading: false,
      success: {
        password: 'Promaster@12',
      },
    });
  });

  it('can capture password reset error', () => {
    expect(
      reducer(undefined, {
        type: types.PASSWORD_RESET_ERROR,
        data,
      }),
    ).toEqual({
      error: undefined,
      loading: false,
      success: null,
    });
  });

  it('can updated password', () => {
    expect(
      reducer(undefined, {
        type: types.PASSWORD_RESET_UPDATE_COMPLETE,
        data,
      }),
    ).toEqual({
      error: null,
      loading: false,
      success: {
        password: 'Promaster@12',
      },
    });
  });
  it('can capture password update error', () => {
    expect(
      reducer(undefined, {
        type: types.PASSWORD_RESET_UPDATE_ERROR,
        data,
      }),
    ).toEqual({
      error: undefined,
      loading: false,
      success: null,
    });
  });
});
