// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB236ynOzKQ7v5hm8pnikDzWFmYuo9TrM",
  authDomain: "lyzer-ai.firebaseapp.com",
  projectId: "lyzer-ai",
  storageBucket: "lyzer-ai.appspot.com",
  messagingSenderId: "350046242908",
  appId: "1:350046242908:web:ab0e1d9157ba66cfb77e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};
