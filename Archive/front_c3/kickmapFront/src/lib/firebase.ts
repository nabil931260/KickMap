// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =
{
  apiKey: "AIzaSyBDCEGG4AwaIk-9xTyBDbeOBIBBK-Z0Ovc",
  authDomain: "kickmaptemp.firebaseapp.com",
  projectId: "kickmaptemp",
  storageBucket: "kickmaptemp.appspot.com",
  messagingSenderId: "698982996350",
  appId: "1:698982996350:web:38538f1e04e8636b253b2f",
  measurementId: "G-85S4W1YQ2B"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);