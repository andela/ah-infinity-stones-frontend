/* eslint-disable import/prefer-default-export */
import { baseURL } from '../components/common/constants';


export async function getAllArticles() {
  const response = await fetch(`${baseURL}articles`, {
    method: 'GET',

  });
  if (response.status === 200) {
    const data = await response.json();
    return [response, data];
  }
  throw new Error(response.status);
}
