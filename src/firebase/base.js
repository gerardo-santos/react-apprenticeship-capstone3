/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqizvJ_kS3KFgASW5EzAgK4YCYiQlRotE',
  authDomain: 'capstone3-969b1.firebaseapp.com',
  projectId: 'capstone3-969b1',
  storageBucket: 'capstone3-969b1.appspot.com',
  messagingSenderId: '550982573386',
  appId: '1:550982573386:web:91c349b3c6fef456d7f5b3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const logInFirebase = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const message = error.message;
      return message;
    });
};

export const signOutFirebase = () => {
  return signOut(auth)
    .then(() => {
      return auth;
    })
    .catch((error) => {
      return error;
    });
};
