import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  signedUp: false,
  error: {},
  success: {},
  payload: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signedUp: false,
        payload: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: true,
        success: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signedUp: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
