// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fbddd.firebaseapp.com",
  projectId: "mern-estate-fbddd",
  storageBucket: "mern-estate-fbddd.appspot.com",
  messagingSenderId: "256397426872",
  appId: "1:256397426872:web:7f373d6d54dab7b9e0344d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);