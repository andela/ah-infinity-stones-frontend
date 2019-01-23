import { twitterAuth, facebookAuth } from '../config/firebase';

export default {
  twitter: async () => {
    const response = await twitterAuth();
    const data = {
      provider: 'twitter',
      access_token: response.credential.accessToken,
      access_token_secret: response.credential.secret,
    };
    return data;
  },
  facebook: async () => {
    const response = await facebookAuth();
    const data = {
      provider: 'facebook',
      access_token: response.credential.accessToken,
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
