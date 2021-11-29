//import * as firebase from "firebase/app";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZMwhwU31yZIDQBNIX_NwCz1Gfl6tSSC8",
  authDomain: "bin-idik.firebaseapp.com",
  projectId: "bin-idik",
  storageBucket: "bin-idik.appspot.com",
  messagingSenderId: "787939109631",
  appId: "1:787939109631:web:dd8750a7f1219648c1baca",
  measurementId: "G-36MS1D3JX0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

