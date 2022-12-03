// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEkKcYxknkFsGfGlhuJvEPDFGdYGty_lI",
    authDomain: "electro-learning.firebaseapp.com",
    projectId: "electro-learning",
    storageBucket: "electro-learning.appspot.com",
    messagingSenderId: "467702354280",
    appId: "1:467702354280:web:56507ffb4224eda02686dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;