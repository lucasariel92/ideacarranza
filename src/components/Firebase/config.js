

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWWtyYq0sw4zHuGFEYXTDu2dFYRrxZOao",
  authDomain: "inromaderas.firebaseapp.com",
  projectId: "inromaderas",
  storageBucket: "inromaderas.appspot.com",
  messagingSenderId: "116501819999",
  appId: "1:116501819999:web:90d84167d5703cd67a21ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

