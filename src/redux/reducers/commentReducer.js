import {
  GET_COMMENTS,
  COMMENTS_RECEIVED,
  POST_COMMENT,
  COMMENT_POSTED,
  GET_TOPIC,
  TOPIC_RECEIVED,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOPIC:
      return { ...state, loadingTopic: true };
    case TOPIC_RECEIVED:
      return { ...state, loadingTopic: false, topic: action.payload };
    case GET_COMMENTS:
      return { ...state, loading: true };
    case COMMENTS_RECEIVED:
      return {
        ...state,
        loading: false,
        success: true,
        items: action.payload.reverse(),
        item0: action.payload[0],
        item1: action.payload[1],
        item2: action.payload[2],
      };
    case POST_COMMENT:
      return { ...state, isPosted: false };
    case COMMENT_POSTED:
      return {
        ...state,
        isPosted: true,
        items: action.payload.reverse(),
        item0: action.payload[0],
        item1: action.payload[1],
        item2: action.payload[2],
      };
    default:
      return state;
  }
}
