// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAG71lJpH-taZQY4EVTw-zpusbE9l1DnME",
    authDomain: "login-american-label.firebaseapp.com",
    projectId: "login-american-label",
    storageBucket: "login-american-label.firebasestorage.app",
    messagingSenderId: "968031209954",
    appId: "1:968031209954:web:71db20a1dc711a7486d1bb"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
