// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMPmAoKa2A5bzJs4HzJwaIO6bhKoNssng",
    authDomain: "reactprojectofppt.firebaseapp.com",
    projectId: "reactprojectofppt",
    storageBucket: "reactprojectofppt.appspot.com",
    messagingSenderId: "756072098981",
    appId: "1:756072098981:web:454f96cb2942e6cb99314c",
    measurementId: "G-3TPWBTNGJ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);