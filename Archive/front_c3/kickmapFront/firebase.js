// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFYp77UxFw98fAGrLM8vhMcHaoFQm2ZNw",
  authDomain: "kickmap-8f6c7.firebaseapp.com",
  databaseURL: "https://kickmap-8f6c7-default-rtdb.firebaseio.com",
  projectId: "kickmap-8f6c7",
  storageBucket: "kickmap-8f6c7.appspot.com",
  messagingSenderId: "992183460289",
  appId: "1:992183460289:web:559b644f0ebc931591cf40",
  measurementId: "G-D69XJ24Y97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); // Export the Firestore database instance
export const auth = getAuth(app); // Export the authentication instance