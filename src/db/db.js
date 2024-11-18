import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdjRUOKopYm1swc1PEURwdSL02GU1saQ0",
  authDomain: "proyecto-final-f4b44.firebaseapp.com",
  projectId: "proyecto-final-f4b44",
  storageBucket: "proyecto-final-f4b44.firebasestorage.app",
  messagingSenderId: "940143117757",
  appId: "1:940143117757:web:e07a5b015b30750782bed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db