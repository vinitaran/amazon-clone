import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYhqy1YDBt_K1QVsnw6VQK9uvUrfEcUEk",
  authDomain: "am-clone-98466.firebaseapp.com",
  databaseURL: "https://am-clone-98466.firebaseio.com",
  projectId: "am-clone-98466",
  storageBucket: "am-clone-98466.appspot.com",
  messagingSenderId: "228557773338",
  appId: "1:228557773338:web:239195a143abca6b174fa3",
  measurementId: "G-1DFWE8FQZE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
