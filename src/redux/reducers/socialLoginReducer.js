import {
  SOCIAL_LOGIN_REQUEST,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_ERROR,
} from '../actions/actionTypes';

const initialState = {
  user: {
    email: '',
    username: '',
    token: '',
    error: null,
    success: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        email: action.data.user.email,
        username: action.data.user.username,
        token: action.data.user.token,
        success: true,
      };
    case SOCIAL_LOGIN_ERROR:
      return { ...state, error: action.data.user.error };
    case SOCIAL_LOGIN_REQUEST:
    default:
      return state;
  }
}
