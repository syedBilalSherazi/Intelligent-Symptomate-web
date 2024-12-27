//D:\Web project\Front-end\frontend\src\pages\FireBase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKC1PLeQN-re2O_Sb_Z3emK-tgoqWbUXA",
  authDomain: "intelligent-symptomate.firebaseapp.com",
  projectId: "intelligent-symptomate",
  storageBucket: "intelligent-symptomate.appspot.com",
  messagingSenderId: "515370010822",
  appId: "1:515370010822:web:cfebedd49a3650e7522fc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
