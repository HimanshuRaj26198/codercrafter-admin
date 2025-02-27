// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzX_DE6QDoxmACSO_x6Y7PtfM2IJFNQyY",
    authDomain: "crafter-841dd.firebaseapp.com",
    projectId: "crafter-841dd",
    storageBucket: "crafter-841dd.firebasestorage.app",
    messagingSenderId: "163182758116",
    appId: "1:163182758116:web:e9d93be8a0df74cf48c4f1",
    measurementId: "G-XSXCCEQ0C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);