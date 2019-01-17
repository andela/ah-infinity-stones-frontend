/* eslint-disable no-undef */
import { baseURL } from '../common/constants';
/**
 *
 * @param {*} payload
 * @returns promise
 */
export default async function register(payload) {
  const response = await fetch(`${baseURL}users/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'localhost:',
    },
    body: JSON.stringify({
      user: {
        email: payload.email,
        username: payload.username,
        password: payload.password,
      },
    }),
  });
  const data = await response.json();
  return data;
}
