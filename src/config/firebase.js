// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYWsnOsrydS01mgA_s4znKdeBffvs8FNg",
  authDomain: "vite-contact-7bbc1.firebaseapp.com",
  projectId: "vite-contact-7bbc1",
  storageBucket: "vite-contact-7bbc1.appspot.com",
  messagingSenderId: "150356463583",
  appId: "1:150356463583:web:a5a0bb2938038b029bfe6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, getDocs};