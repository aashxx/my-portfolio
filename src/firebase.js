import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAE1715lAOBh3NgBNczh2zgGkjUIyRHRcg",
  authDomain: "aashir-portfolio.firebaseapp.com",
  projectId: "aashir-portfolio",
  storageBucket: "aashir-portfolio.appspot.com",
  messagingSenderId: "524011199934",
  appId: "1:524011199934:web:20fc1df4419508851c2def"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();