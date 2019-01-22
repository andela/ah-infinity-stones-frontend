const url = 'http://127.0.0.1:8000/api/login/oauth/';

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
