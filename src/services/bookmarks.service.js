/* eslint quote-props: ["error", "always"] */
/* eslint-disable no-undef */
import { baseURL } from '../common/constants';

async function bookmarks() {
  const path = '/bookmarks/';
  const token = localStorage.getItem('Token');
  try {
    const response = await fetch(baseURL + path, {
      'method': 'GET',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}
export default bookmarks;
