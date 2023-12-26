import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHBlTaGRdEhvXtT7jGkpOo3I0UCoPRQxE",
  authDomain: "nwitter-reloaded-c7be8.firebaseapp.com",
  projectId: "nwitter-reloaded-c7be8",
  storageBucket: "nwitter-reloaded-c7be8.appspot.com",
  messagingSenderId: "231387484468",
  appId: "1:231387484468:web:3d2cf953001e256c0e5561"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);