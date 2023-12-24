// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPsEDDtDDu4noPl6rAAl81aLtUTmbZQ1w",
  authDomain: "movies-957d6.firebaseapp.com",
  projectId: "movies-957d6",
  storageBucket: "movies-957d6.appspot.com",
  messagingSenderId: "1004656034177",
  appId: "1:1004656034177:web:738b04d6c7554217f62880",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
