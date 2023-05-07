// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6kkXWa8QD1PZ6YOgD6Kd7Tlb_HZbD4N0",
  authDomain: "the-hungry-head.firebaseapp.com",
  projectId: "the-hungry-head",
  storageBucket: "the-hungry-head.appspot.com",
  messagingSenderId: "822934795953",
  appId: "1:822934795953:web:156c9056642a64980d5490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;