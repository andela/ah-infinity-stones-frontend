import {
  baseURL,
} from '../common/constants';

export async function bookmark(slug) {
  try {
    const response = await fetch(`${baseURL}articles/${slug}/bookmark`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function unbookmark(slug) {
  try {
    const response2 = await fetch(`${baseURL}articles/${slug}/bookmark`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `${localStorage.getItem('Token')}`,
      },
    });
    const data = await response2.json();
    return data;
  } catch (error) {
    return error;
  }
}
