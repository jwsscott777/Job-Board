import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC137q73NgfG9GrA1rDFta5SXRLAqwoCAE",
    authDomain: "job-board-8141d.firebaseapp.com",
    projectId: "job-board-8141d",
    storageBucket: "job-board-8141d.appspot.com",
    messagingSenderId: "414908342506",
    appId: "1:414908342506:web:639d56f793631de6fdb793"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init firestore service
  const projectAuth = firebase.auth();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFireStore, projectAuth, timestamp }