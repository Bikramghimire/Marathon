// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUqfPZVDE9J-i-IIXCweg3_4chtuurYI",
  authDomain: "food-app-fc395.firebaseapp.com",
  projectId: "food-app-fc395",
  storageBucket: "food-app-fc395.appspot.com",
  messagingSenderId: "647737275005",
  appId: "1:647737275005:web:96eceb3c64cf5ba84cf714",
  measurementId: "G-1KBYQ5RQQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
