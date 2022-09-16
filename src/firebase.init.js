// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxGZ4r3VC297HTrekS-wXJQmHbaJHTHhI",
  authDomain: "pet-profile-app.firebaseapp.com",
  projectId: "pet-profile-app",
  storageBucket: "pet-profile-app.appspot.com",
  messagingSenderId: "315722605712",
  appId: "1:315722605712:web:e2659592b90f4f72a6a415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;