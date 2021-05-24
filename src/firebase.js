// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAKKQXtPTILrPV5KHwXR37ZCghk8Zns1SY",
    authDomain: "instagram-clone-f4cb6.firebaseapp.com",
    databaseURL: "https://instagram-clone-f4cb6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "instagram-clone-f4cb6",
    storageBucket: "instagram-clone-f4cb6.appspot.com",
    messagingSenderId: "879436667742",
    appId: "1:879436667742:web:b310d9e157305d010c0dcf",
    measurementId: "G-B1BK3M9V4M"

  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage };

  //export default db;