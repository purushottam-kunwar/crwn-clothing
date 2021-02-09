import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCp6FHB3afLC0b7rTJFG3h9jCLXbisZcBA',
  authDomain: 'crwn-db-ef57b.firebaseapp.com',
  projectId: 'crwn-db-ef57b',
  storageBucket: 'crwn-db-ef57b.appspot.com',
  messagingSenderId: '682009683649',
  appId: '1:682009683649:web:f313894779f6aab98a9640',
  measurementId: 'G-9M73E5GZ4P'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
