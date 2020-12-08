// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtF1GiGU7_KETSs96rDbupwNLI7l_dzfc",
  authDomain: "challenge-191c5.firebaseapp.com",
  databaseURL: "https://challenge-191c5.firebaseio.com",
  projectId: "challenge-191c5",
  storageBucket: "challenge-191c5.appspot.com",
  messagingSenderId: "508621500079",
  appId: "1:508621500079:web:e0c7aa28d66148867c6e5a",
  measurementId: "G-6QPPSWXNE2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
