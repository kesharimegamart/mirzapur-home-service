
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGxWy58rwbPYp1pyl4E-By-k7V86mBsI",
  authDomain: "mirzapur-home-service.firebaseapp.com",
  projectId: "mirzapur-home-service",
  storageBucket: "mirzapur-home-service.firebasestorage.app",
  messagingSenderId: "1016787889015",
  appId: "1:1016787889015:web:c98e6d2d05f1739797cf72",
  measurementId: "G-CN05SM258B"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
