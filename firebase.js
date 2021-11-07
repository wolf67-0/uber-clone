// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1TaLxWHcJnJJQIxyhz-WaJ_JOTp7IbT4",
  authDomain: "uberclone-ed2ef.firebaseapp.com",
  projectId: "uberclone-ed2ef",
  storageBucket: "uberclone-ed2ef.appspot.com",
  messagingSenderId: "841975521869",
  appId: "1:841975521869:web:922b2cccd20742dc097204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }