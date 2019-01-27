import {
  GET_BY_TAGS_REQUEST,
  GET_BY_TAGS_SUCCESS,
  GET_BY_TAGS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  results: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BY_TAGS_SUCCESS:
      return {
        ...state,
        results: action.data,
      };
    case GET_BY_TAGS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case GET_BY_TAGS_REQUEST:
    default:
      return state;
  }
}
