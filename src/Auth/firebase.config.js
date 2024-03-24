// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbllY2IV__Es4FsjTRTy85YA6sjNVeQ5Q",
    authDomain: "vsms-ee02b.firebaseapp.com",
    projectId: "vsms-ee02b",
    storageBucket: "vsms-ee02b.appspot.com",
    messagingSenderId: "256748281396",
    appId: "1:256748281396:web:51cc681c1f7fb95ccfb461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;