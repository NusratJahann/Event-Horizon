// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM3mBgX9BXXxQMWOuLIncCVCtLg2cH6Dk",
  authDomain: "event-horizon-cb9ed.firebaseapp.com",
  projectId: "event-horizon-cb9ed",
  storageBucket: "event-horizon-cb9ed.appspot.com",
  messagingSenderId: "557100583564",
  appId: "1:557100583564:web:812a582ff8c295913489a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;