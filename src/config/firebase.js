// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa02bYTWL8ZFtWBgewhi2W-9X-r-1pAQw",
  authDomain: "senzers-b62ce.firebaseapp.com",
  projectId: "senzers-b62ce",
  storageBucket: "senzers-b62ce.appspot.com",
  messagingSenderId: "181380347790",
  appId: "1:181380347790:web:aafff550dc1613c1a996df",
  measurementId: "G-0V63GQE01J"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db= getFirestore();