// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA80EgvWqiUX6LFL24Qf1N_3OTCKhmoDw8",
    authDomain: "assignment-10-4c7e1.firebaseapp.com",
    projectId: "assignment-10-4c7e1",
    storageBucket: "assignment-10-4c7e1.appspot.com",
    messagingSenderId: "498668297584",
    appId: "1:498668297584:web:6b5e7931e271f50ce743b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;