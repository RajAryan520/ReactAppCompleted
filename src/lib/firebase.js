
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-70f00.firebaseapp.com",
  projectId: "reactchat-70f00",
  storageBucket: "reactchat-70f00.appspot.com",
  messagingSenderId: "367538070157",
  appId: "1:367538070157:web:2aeeec1fcb3e5e99f438c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()