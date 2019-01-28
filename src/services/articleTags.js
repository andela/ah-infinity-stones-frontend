import { baseURL } from '../common/constants';
/**
 *
 * @param {*} payload
 * @returns promise
 */
export default async function tags(tag) {
  const response = await fetch(`${baseURL}articles/search/?tag=${tag}`, {
    method: 'GET',
    Authorization: `${localStorage.getItem('Token')}`,
  });

  const data = await response.json();
  return data;
}
