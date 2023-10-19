// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-366fa.firebaseapp.com",
  projectId: "mern-estate-366fa",
  storageBucket: "mern-estate-366fa.appspot.com",
  messagingSenderId: "163664326173",
  appId: "1:163664326173:web:bd55b1f0bace798c0ce0f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);