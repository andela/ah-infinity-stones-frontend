/* eslint quote-props: ["error", "always"] */
/* eslint-disable no-undef */
import { baseURL } from '../common/constants';

/* handle api call */
async function login(user) {
  const path = 'users/login/';
  const userDetails = JSON.stringify({
    'user': {
      'email': user.email,
      'password': user.password,
    },
  });
  try {
    const response = await fetch(baseURL + path, {
      'method': 'POST',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      'body': userDetails,
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}
export default login;
