// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwiZ9BvEE7H5ABQeIYLUeN_rXnp_bK3g8",
  authDomain: "heritage-furniture.firebaseapp.com",
  projectId: "heritage-furniture",
  storageBucket: "heritage-furniture.appspot.com",
  messagingSenderId: "63779430477",
  appId: "1:63779430477:web:426599b6f8cae9d7fd3c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;