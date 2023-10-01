// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBuMLRYmXr1syOVtzxSP6mrOQvJuG8q9ys",
  authDomain: "d-6c8e8.firebaseapp.com",
  projectId: "d-6c8e8",
  storageBucket: "d-6c8e8.appspot.com",
  messagingSenderId: "860227727185",
  appId: "1:860227727185:web:6330044e2204003333ed70",
  measurementId: "G-PYK0H6P494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);