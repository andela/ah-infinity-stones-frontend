import { baseURL } from '../common/constants';

const token = window.location.pathname.split('/').pop();

export async function passwordReset(email) {
  try {
    const response = await fetch(`${baseURL}user/password-reset/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    console.log(response);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}


export async function passwordUpdate(password) {
  try {
    const response = await fetch(`${baseURL}users/reset/${token}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}
