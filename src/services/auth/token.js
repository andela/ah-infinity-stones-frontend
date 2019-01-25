/* eslint-disable no-undef */
/*  eslint-enable  */
export const saveToken = (data) => {
  localStorage.setItem('Token', data.Token);
  localStorage.setItem('isSignedUp', true);
};
export const getToken = () => {
  localStorage.getItem('Token');
};
