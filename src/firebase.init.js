// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhIgjSra4bv59Rd3Y2-RJ-t1MrifXB7c",
  authDomain: "auth-all-in-one-a3fa9.firebaseapp.com",
  projectId: "auth-all-in-one-a3fa9",
  storageBucket: "auth-all-in-one-a3fa9.firebasestorage.app",
  messagingSenderId: "267428734414",
  appId: "1:267428734414:web:b97487348fd073af30379f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);