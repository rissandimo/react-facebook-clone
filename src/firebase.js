import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBbDhi5eJswiwqoo2JVRnfPZjHhM29PxN0",
    authDomain: "facebook-clone-9d770.firebaseapp.com",
    databaseURL: "https://facebook-clone-9d770.firebaseio.com",
    projectId: "facebook-clone-9d770",
    storageBucket: "facebook-clone-9d770.appspot.com",
    messagingSenderId: "544764537085",
    appId: "1:544764537085:web:0749c1fe5eaccb7eb5b694",
    measurementId: "G-VSW454HBND"
  };

  // connect react to db
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // get access to db
  const db = firebaseApp.firestore();

  // login/signout
  const auth = firebase.auth();

  // Set google as auth provider
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
