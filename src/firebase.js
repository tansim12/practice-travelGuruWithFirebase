// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzF89HpRALaxGDzmgSnR8QrTo1VBSnaaQ",
  authDomain: "practice-travelguru.firebaseapp.com",
  projectId: "practice-travelguru",
  storageBucket: "practice-travelguru.appspot.com",
  messagingSenderId: "989493098714",
  appId: "1:989493098714:web:a85cb6b040aae54d344de3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
