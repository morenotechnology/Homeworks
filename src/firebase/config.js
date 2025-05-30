// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHUnRTbgAu6PtsYV4PGReYUPDNY-r6oos",
  authDomain: "estructuras-ffe94.firebaseapp.com",
  projectId: "estructuras-ffe94",
  storageBucket: "estructuras-ffe94.firebasestorage.app",
  messagingSenderId: "828033638719",
  appId: "1:828033638719:web:e133c76d847e89828a738a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {app, auth, provider}