// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSd8a2Eer_3GMYULBI5M0NzByq3reXN1w",
  authDomain: "coffee-store-563b9.firebaseapp.com",
  projectId: "coffee-store-563b9",
  storageBucket: "coffee-store-563b9.appspot.com",
  messagingSenderId: "53538596208",
  appId: "1:53538596208:web:37b99f817592848e555bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;