import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAEumUftx2otLH_fazX21EoF4xiDnNGwZo',
  authDomain: 'ah-infinity.firebaseapp.com',
};

firebase.initializeApp(firebaseConfig);

const TwitterProvider = new firebase.auth.TwitterAuthProvider();

export const twitterAuth = async () => {
  const response = await firebase.auth().signInWithPopup(TwitterProvider);
  return response;
};

const FacebookProvider = new firebase.auth.FacebookAuthProvider();

export const facebookAuth = async () => {
  const response = await firebase.auth().signInWithPopup(FacebookProvider);
  return response;
};
