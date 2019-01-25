const url = 'https://cors-anywhere.herokuapp.com/login/oauth/';

export default async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),

  });
  const responseData = await response.json();
  return responseData;
};
