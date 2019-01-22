export default {
  twitter: (response) => {
    const data = {
      provider: 'twitter',
      access_token: response.accessToken,
      access_token_secret: response.secret,
    };
    return data;
  },
  facebook: (response) => {
    const data = {
      provider: 'facebook',
      access_token: response.accessToken,
    };
    return data;
  },
  google: (response) => {
    const data = {
      provider: 'google-oauth2',
      access_token: response.accessToken,
    };
    return data;
  },
};
