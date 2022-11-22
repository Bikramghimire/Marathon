import * as firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXpY7j8RbLloiOa4wpsaeXnvR35eZHzhY",
  authDomain: "react-ecommerce-4b854.firebaseapp.com",
  projectId: "react-ecommerce-4b854",
  storageBucket: "react-ecommerce-4b854.appspot.com",
  messagingSenderId: "831282892925",
  appId: "1:831282892925:web:5365c3b1c99b9d02bf6114",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const GoogleAuthProvider = firebase.auth().GoogleAuthProvider();
