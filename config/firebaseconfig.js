// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABOS0Uwxo-CKysth1dso4OhJGKLxWI2GM",
  authDomain: "medic-track-75274.firebaseapp.com",
  projectId: "medic-track-75274",
  storageBucket: "medic-track-75274.firebasestorage.app",
  messagingSenderId: "780202648199",
  appId: "1:780202648199:web:d233d22ea9b410d09f8e22",
  measurementId: "G-KVXNJBENTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);