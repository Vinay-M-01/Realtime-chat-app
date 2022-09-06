// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0CAerLTpUPsVIcfU0-LA7fMkbCURj0H8",
  authDomain: "realtime-chat-app-65cd3.firebaseapp.com",
  projectId: "realtime-chat-app-65cd3", 
  storageBucket: "realtime-chat-app-65cd3.appspot.com",
  messagingSenderId: "180462195923",
  appId: "1:180462195923:web:8dfcef7a1c38f253f2b026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)