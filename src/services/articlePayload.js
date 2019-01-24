import { baseURL } from '../components/common/constants';


export async function createArticle(article) {
  const response = await fetch(`${baseURL}articles`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `${localStorage.getItem('Token')}`,
    },
    body: JSON.stringify(article),
  });
  if (response.status === 201) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.status);
}

export async function getAllArticles() {
  const response = await fetch(`${baseURL}articles`, {
    method: 'GET',
    Authorization: `${localStorage.getItem('Token')}`,
  });
  if (response.status === 200) {
    const data = await response.json();
    return [response, data];
  }
  throw new Error(response.status);
}
export async function getOneArticle(artSlug) {
  const response = await fetch(`${baseURL}articles/${artSlug}`, {
    method: 'GET',
    Authorization: `${localStorage.getItem('Token')}`,
  });
  if (response.status === 200) {
    const data = await response.json();
    return [response, data];
  }
  throw new Error(response.status);
}
export async function updateArticle(article) {
  const response = await fetch(`${baseURL}articles/${article.artSlug}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `${localStorage.getItem('Token')}`,
    },
    body: JSON.stringify(article),
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw new Error(response.status);
}
export async function deleteArticle(artSlug) {
  const response = await fetch(`${baseURL}articles/${artSlug}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${localStorage.getItem('Token')}`,
    },
  });
  if (response.status === 204) {
    return response;
  }
  throw new Error(response);
}
