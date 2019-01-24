import { GET_PROFILE, UPDATE_PROFILE } from './actionTypes';

export const getProfile = () => ({
  type: GET_PROFILE,
});

export const updateProfile = postData => ({
  type: UPDATE_PROFILE,
  payload: postData,
});
