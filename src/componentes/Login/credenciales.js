// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG71lJpH-taZQY4EVTw-zpusbE9l1DnME",
  authDomain: "login-american-label.firebaseapp.com",
  projectId: "login-american-label",
  storageBucket: "login-american-label.firebasestorage.app",
  messagingSenderId: "968031209954",
  appId: "1:968031209954:web:71db20a1dc711a7486d1bb"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;