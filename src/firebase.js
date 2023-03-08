import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCj64hUjiJZJCMdUPbLqd0qsrx7fz7mb4E",
  authDomain: "netflix-clone-d7d03.firebaseapp.com",
  projectId: "netflix-clone-d7d03",
  storageBucket: "netflix-clone-d7d03.appspot.com",
  messagingSenderId: "816007576217",
  appId: "1:816007576217:web:a2bbd6a4182bab25d31608",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};

export default db;
