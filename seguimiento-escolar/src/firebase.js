// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzN20RM7OhqL27-Kgxsb_cN21R4NZg0Dc",
  authDomain: "conexion-academica-auth.firebaseapp.com",
  projectId: "conexion-academica-auth",
  storageBucket: "conexion-academica-auth.firebasestorage.app",
  messagingSenderId: "331359048998",
  appId: "1:331359048998:web:81cbc3c9a61b2a21609de7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
