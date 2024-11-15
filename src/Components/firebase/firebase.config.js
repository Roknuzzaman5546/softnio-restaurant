// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1iryPa9V4ii4wnJw51Fi1GRMHG6LtfO4",
  authDomain: "restaurant-project-ea398.firebaseapp.com",
  projectId: "restaurant-project-ea398",
  storageBucket: "restaurant-project-ea398.firebasestorage.app",
  messagingSenderId: "282383286870",
  appId: "1:282383286870:web:d6e6ce4e82043b06aab1f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);