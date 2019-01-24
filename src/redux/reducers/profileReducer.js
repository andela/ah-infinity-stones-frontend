import {
  GET_PROFILE,
  PROFILE_RECEIVED,
  UPDATE_PROFILE,
  PROFILE_UPDATED,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  success: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, loading: true };
    case PROFILE_RECEIVED:
      return {
        ...state,
        item: action.payload,
        user: action.payload.user,
        loading: false,
        success: true,
      };
    case UPDATE_PROFILE:
      return { ...state, isUpdated: false };
    case PROFILE_UPDATED:
      return { ...state, isUpdated: true, item: action.payload };
    default:
      return state;
  }
}
