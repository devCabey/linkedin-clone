// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCQRQf7Ha_0PS4G2td0XB5ltlaa6-q955g",
  authDomain: "linkedin-annex.firebaseapp.com",
  projectId: "linkedin-annex",
  storageBucket: "linkedin-annex.appspot.com",
  messagingSenderId: "730870772170",
  appId: "1:730870772170:web:a74d65097c2b00fedd9f33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
