// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-e08b2.firebaseapp.com",
  projectId: "mern-real-estate-e08b2",
  storageBucket: "mern-real-estate-e08b2.appspot.com",
  messagingSenderId: "978465131481",
  appId: "1:978465131481:web:3dbe2182925fe8122627c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);