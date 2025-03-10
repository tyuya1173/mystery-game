// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfaRCdXPWTEupO5lebEpVbu1Hyj_KswU",
  authDomain: "mystery-game-e5919.firebaseapp.com",
  projectId: "mystery-game-e5919",
  storageBucket: "mystery-game-e5919.firebasestorage.app",
  messagingSenderId: "128899054449",
  appId: "1:128899054449:web:1ea3c30c3eedd143cc14d0",
  measurementId: "G-2WBPBTEN90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);