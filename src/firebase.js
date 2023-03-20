import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXakbM_Qzmvj1EMVD6kvnbhvei0lWnP3Q",
  authDomain: "blogpost-6e38a.firebaseapp.com",
  projectId: "blogpost-6e38a",
  storageBucket: "blogpost-6e38a.appspot.com",
  messagingSenderId: "477786905977",
  appId: "1:477786905977:web:4bfcd7f52fe1f3a274e3a8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();