import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsNvjSjwcCGEOqfuU-EJ2YIyfZNlY9Cak",
  authDomain: "sportzvision-4518c.firebaseapp.com",
  projectId: "sportzvision-4518c",
  storageBucket: "sportzvision-4518c.firebasestorage.app",
  messagingSenderId: "762370200693",
  appId: "1:762370200693:web:290f4a1b93a83b2143d43c",
  measurementId: "G-ZP4BHRF144"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
