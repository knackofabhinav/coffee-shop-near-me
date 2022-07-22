import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpbQD5-R-Hu8Qv65QjyDIiaCPbPW6VMNA",
  authDomain: "todo-6830e.firebaseapp.com",
  projectId: "todo-6830e",
  storageBucket: "todo-6830e.appspot.com",
  messagingSenderId: "500508454738",
  appId: "1:500508454738:web:f7c7b2eeb005acc1b3148b",
  measurementId: "G-4EMKQVJ4EY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
