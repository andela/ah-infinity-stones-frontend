import { GET_COMMENTS, POST_COMMENT, GET_TOPIC } from './actionTypes';

export const getComments = () => ({
  type: GET_COMMENTS,
});

export const postComment = postData => ({
  type: POST_COMMENT,
  payload: postData,
});

export const getTopic = () => ({
  type: GET_TOPIC,
});
