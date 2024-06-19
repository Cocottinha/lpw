// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZpUdj80WL4TGwp1U3YeOpR9fEDv3rZOI",
  authDomain: "lpw-nextjs.firebaseapp.com",
  projectId: "lpw-nextjs",
  storageBucket: "lpw-nextjs.appspot.com",
  messagingSenderId: "912798181740",
  appId: "1:912798181740:web:f3e63b4c3fcc281e076b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)