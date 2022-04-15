import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR9Xfhtw5CPja6tQ4r94X1Ngj_3cnnKXo",
  authDomain: "clone-69a.firebaseapp.com",
  projectId: "clone-69a",
  storageBucket: "clone-69a.appspot.com",
  messagingSenderId: "812532381941",
  appId: "1:812532381941:web:0f6e5d8989e85721592dbc",
  measurementId: "G-344DXD38VX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
