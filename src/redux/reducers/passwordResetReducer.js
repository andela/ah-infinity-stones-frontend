import {
  PASSWORD_RESET_START,
  PASSWORD_RESET_COMPLETE,
  PASSWORD_RESET_ERROR,
  PASSWORD_RESET_UPDATE_ERROR,
  PASSWORD_RESET_UPDATE_COMPLETE,
  PASSWORD_RESET_UPDATE_START,

} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  success: null,
};

const passwordReset = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET_START:
      return {
        ...state,
        loading: true,
      };
    case PASSWORD_RESET_COMPLETE:
      return {
        ...state,
        loading: false,
        success: action.data,

      };
    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case PASSWORD_RESET_UPDATE_START:
      return {
        ...state,
        loading: true,
      };

    case PASSWORD_RESET_UPDATE_COMPLETE:
      return {
        ...state,
        success: action.data,
        loading: false,
      };
    case PASSWORD_RESET_UPDATE_ERROR:
      return {
        ...state,
        error: action.error,

      };


    default:
      return state;
  }
};


export default passwordReset;
