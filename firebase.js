import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
export const db = getFirestore(app);
