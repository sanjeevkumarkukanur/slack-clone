import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqetnCdDABbMZIbUQYimy0doaawF0C6GQ",
    authDomain: "slack-clone-cf2cf.firebaseapp.com",
    projectId: "slack-clone-cf2cf",
    storageBucket: "slack-clone-cf2cf.appspot.com",
    messagingSenderId: "178870291724",
    appId: "1:178870291724:web:72152483b3b9c249778d29"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, db, provider}