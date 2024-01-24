import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZt8ncsV3ri5UzZHc9M1NZreWBkWKZDSA",
  authDomain: "cementerio-de-los-libros.firebaseapp.com",
  projectId: "cementerio-de-los-libros",
  storageBucket: "cementerio-de-los-libros.appspot.com",
  messagingSenderId: "545348080257",
  appId: "1:545348080257:web:14e1a0b6537fabb9573380"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db