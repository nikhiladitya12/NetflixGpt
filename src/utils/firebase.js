// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALZbR3WcrZ1d0p_tgwmtqzsbClRBxjmRI",
  authDomain: "netflixgpt-b2c4c.firebaseapp.com",
  projectId: "netflixgpt-b2c4c",
  storageBucket: "netflixgpt-b2c4c.appspot.com",
  messagingSenderId: "629060226444",
  appId: "1:629060226444:web:f456bd5d773e185da4daa9",
  measurementId: "G-R82WZ2W2BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();