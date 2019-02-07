import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { cloneableGenerator } from 'redux-saga/utils';
import { call, put } from 'redux-saga/effects';
import Signup from '.';
import * as types from '../../redux/actions/actionTypes';
import * as actions from '../../redux/actions/signupActions';
import reducer from '../../redux/reducers/signupReducer';
import { signupSaga } from '../../redux/sagas/signupSaga';
import validateData, { handleSuccess } from './validate';
import responseData from '../../services/signupPayload';

describe('<Signup />', () => {
  let component;
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        {' '}
        <Signup />
        {' '}
      </Provider>,
    );
  });
  it('render 1 Signup compoment', () => {
    expect(component).toHaveLength(1);
  });

  it('singup compoment should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('signup component contains a state', () => {
    expect(component.find('state'));
  });

  it('contains a user registration form', () => {
    expect(component.find('form'));
  });

  it('signup component contains a button', () => {
    expect(component.find('button'));
  });
});

describe('Action creators', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      user: {
        username: 'GuruMaster',
        email: 'gurumaster@gmail.com',
        password: 'Guru@2018',
      },
    };
  });

  it('should create an action to send signup request', () => {
    const expectedAction = {
      type: types.SIGNUP_REQUEST,
      payload,
    };
    expect(actions.signupRequestAction(payload)).toEqual(expectedAction);
  });

  it('should return an action for successful registration', () => {
    const expectedAction = {
      type: types.SIGNUP_SUCCESS,
      payload,
    };
    expect(actions.signupSuccessAction(payload)).toEqual(expectedAction);
  });

  it('should return an action for signup failure', () => {
    const expectedAction = {
      type: types.SIGNUP_FAILURE,
      payload,
    };
    expect(actions.signupFailureAction(payload)).toEqual(expectedAction);
  });
});

describe('Reducers', () => {
  let payload = {};

  beforeEach(() => {
    payload = {
      user: {
        username: 'Junior',
        email: 'junior@gmail.com',
        password: 'Junior@2019',
      },
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      error: {},
      payload: {},
      signedUp: false,
      success: {},
    });
  });

  it('should handle SIGNUP_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNUP_REQUEST,
        payload,
      }),
    ).toEqual({
      error: {},
      payload,
      signedUp: false,
      success: {},
    });
  });

  it('should handle SIGNUP_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNUP_SUCCESS,
        payload,
      }),
    ).toEqual({
      error: {},
      payload: {},
      signedUp: true,
      success: {
        user: {
          email: 'junior@gmail.com',
          password: 'Junior@2019',
          username: 'Junior',
        },
      },
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNUP_FAILURE,
        payload,
      }),
    ).toEqual({
      error: payload,
      payload: {},
      signedUp: false,
      success: {},
    });
  });
});

describe('validations', () => {
  it('can validate invalid username', () => {
    const name = {
      username: 'Paul',
      email: '',
      password: '',
      cpassword: '',
    };
    expect(validateData(name).usernameError).toEqual('Username must have at least six characters');
  });

  it('can validate invalid email', () => {
    const email = {
      username: 'Promaster',
      email: 'someone@gmailcom',
      password: '',
      cpassword: '',
    };
    expect(validateData(email).emailError).toEqual('Invalid email address');
  });

  it('can validate invalid password', () => {
    const password = {
      username: 'Gedion',
      email: 'gedion@gmail.com',
      password: 'Gedio',
      cpassword: '',
    };
    expect(validateData(password).passwordError).toEqual(
      'Password must have at least six characters',
    );
  });

  it('can validate invalid password', () => {
    const password = {
      username: 'Jackson',
      email: 'jackson@gmail.com',
      password: 'Jackson2018',
      cpassword: '',
    };
    expect(validateData(password).passwordError).toEqual(
      'Enter strong password e.g p!Yd7YzU,S8}p}@',
    );
  });

  it('can validate invalid cpassword', () => {
    const cpassword = {
      username: 'Someone',
      email: 'someone@gmail.com',
      password: 'Someone@2018',
      cpassword: 'Someone2018',
    };
    expect(validateData(cpassword).cpasswordError).toEqual('Password does not match');
  });

  it('can enable or disable sign up button', () => {
    const data = {
      username: 'Daniel',
      email: 'daniel@gmail.com',
      password: 'Daniel@2019',
      cpassword: 'Daniel@2019',
    };
    expect(handleSuccess(data).buttonDisabled).toBeFalsy();
  });
});

describe('Test SignUp sagas', () => {
  const payload = {
    email: 'pmutondo12@email.com',
    username: 'PromasterG',
    password: 'Promaster12@',
  };
  const signupRequestAction = actions.signupRequestAction(payload);
  const generator = cloneableGenerator(signupSaga)(signupRequestAction);

  it('can handle api function call with saga', () => {
    expect(generator.next().value).toEqual(call(responseData, payload));
  });

  it('can handle api call success', () => {
    const res = {
      user: {
        Message: 'You have successfully registered',
        Token: 'adeAFEAxfedfdea00e99f0e9faf8d8afsdjfaf-ef90a9f',
      },
    };
    const expected = put(actions.signupSuccessAction(res.user));
    expect(generator.next(res).value).toEqual(expected);
  });
  it('can handle api call error', async () => {
    const generator = cloneableGenerator(signupSaga)(signupRequestAction);
    expect(generator.next().value).toEqual(call(responseData, payload));
    const res = await responseData(payload);
    expect(generator.next(res).value).toEqual(put(actions.signupFailureAction(res.errors)));
  });
});
