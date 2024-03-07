import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2GeswHvnc-9PLQL-tDDKunBKM8WiELfM",
  authDomain: "netflixgpt-13a50.firebaseapp.com",
  projectId: "netflixgpt-13a50",
  storageBucket: "netflixgpt-13a50.appspot.com",
  messagingSenderId: "821347668795",
  appId: "1:821347668795:web:442a8075e389403e4f1d1e",
  measurementId: "G-EPHZGD7WCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();
