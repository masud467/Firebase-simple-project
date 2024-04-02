// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkYPbmAZXrvaxT0JnqfwDXKTwMFTCQiWI",
  authDomain: "module-firebase-project.firebaseapp.com",
  projectId: "module-firebase-project",
  storageBucket: "module-firebase-project.appspot.com",
  messagingSenderId: "70798454631",
  appId: "1:70798454631:web:9156706252df0e7e5409c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;