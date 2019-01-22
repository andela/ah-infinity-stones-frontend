import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAEumUftx2otLH_fazX21EoF4xiDnNGwZo',
  authDomain: 'ah-infinity.firebaseapp.com',
};

firebase.initializeApp(firebaseConfig);

const TwitterProvider = new firebase.auth.TwitterAuthProvider();

const twitterAuth = async () => {
  const response = await firebase.auth().signInWithPopup(TwitterProvider);
  return response;
};

const FacebookProvider = new firebase.auth.FacebookAuthProvider();

const facebookAuth = async () => {
  const response = await firebase.auth().signInWithPopup(FacebookProvider);
  return response;
};

export default {
  twitterAuth,
  facebookAuth,
};
