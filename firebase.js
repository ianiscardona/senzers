// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
// import "firebase/compat/database";
import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/storage";
// import { getDatabase } from "firebase/compat/database";
// import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDa02bYTWL8ZFtWBgewhi2W-9X-r-1pAQw",
  authDomain: "senzers-b62ce.firebaseapp.com",
  databaseURL:
    "https://senzers-b62ce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "senzers-b62ce",
  storageBucket: "senzers-b62ce.appspot.com",
  messagingSenderId: "181380347790",
  appId: "1:181380347790:web:aafff550dc1613c1a996df",
  measurementId: "G-0V63GQE01J",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = firebase.storage();
// const database = getDatabase(app);
export { firebase, db};



// export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
