/* eslint-disable no-undef */
/*  eslint-enable  */
export const saveToken = (data) => {
  localStorage.setItem('token', data.Token);
  localStorage.setItem('isSignedUp', true);
};
export const getToken = () => {
  localStorage.getItem('token');
};
