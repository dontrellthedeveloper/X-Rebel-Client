// import * as firebase from "firebase";
import firebase from 'firebase/app';
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqnlaZ9qomBRS99WkNzpUfimkNne4fYWA",
    authDomain: "mern-x-rebel.firebaseapp.com",
    projectId: "mern-x-rebel",
    storageBucket: "mern-x-rebel.appspot.com",
    messagingSenderId: "715491748198",
    appId: "1:715491748198:web:46c3812bc67286e459c0a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();