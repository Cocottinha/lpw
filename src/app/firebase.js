import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"

export const firebaseConfig = {
  apiKey: "AIzaSyBZpUdj80WL4TGwp1U3YeOpR9fEDv3rZOI",
  authDomain: "lpw-nextjs.firebaseapp.com",
  projectId: "lpw-nextjs",
  storageBucket: "lpw-nextjs.appspot.com",
  messagingSenderId: "912798181740",
  appId: "1:912798181740:web:f3e63b4c3fcc281e076b49"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const auth = getAuth(app)
export const db = getStorage(app)