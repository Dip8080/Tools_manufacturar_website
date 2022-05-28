// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLSzTPIRWfZfcX-JJG6T3WPHW_9s8IZbE",
  authDomain: "tools-house-ca59d.firebaseapp.com",
  projectId: "tools-house-ca59d",
  storageBucket: "tools-house-ca59d.appspot.com",
  messagingSenderId: "1077688802672",
  appId: "1:1077688802672:web:b153f97d52d03c351083b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;