import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBdkGBxFN01zmiF02IFV86GILoaRW7Xcbw",
  authDomain: "jem-goal-tracker.firebaseapp.com",
  projectId: "jem-goal-tracker",
  storageBucket: "jem-goal-tracker.firebasestorage.app",
  messagingSenderId: "31585386651",
  appId: "1:31585386651:web:ac280d9db2d18bdda6c63e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)