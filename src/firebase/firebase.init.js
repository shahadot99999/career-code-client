// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

// // Debug: Check if environment variables are loaded
// console.log('Firebase Config:', firebaseConfig);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


//......................

// // console.log('Firebase initialized successfully');
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// // Temporary hardcoded config for testing
// const firebaseConfig = {
//   apiKey: "AIzaSyCwYFGuFn2S9D--T-tLF-CggaPK-k7-NTo",
//   authDomain: "career-code-bd239.firebaseapp.com",
//   projectId: "career-code-bd239",
//   storageBucket: "career-code-bd239.firebasestorage.app",
//   messagingSenderId: "656704683437",
//   appId: "1:656704683437:web:5358b3b1ef3ae3c713b524"
// };

// console.log('Firebase Config:', firebaseConfig);

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);


import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Debug: Check if environment variables are loaded properly
console.log('Environment API Key:', import.meta.env.VITE_apiKey);
console.log('Full Firebase Config:', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log('Firebase initialized with environment variables!');