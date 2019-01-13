import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOGIN_ERROR,
} from '../actions/actionTypes';


const initialState = {
  success: null,
  error: null,
  loading: false,
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case RECEIVE_LOGIN:
      return {
        ...state,
        success: action.data,
        loading: false,
        isLoggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: 'Invalid Email or Password',
        loading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
