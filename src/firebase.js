// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwx1-ZQmAGp8W-u125DOi6w7shsum9UIo",
  authDomain: "galeri-kelas.firebaseapp.com",
  projectId: "galeri-kelas",
  storageBucket: "galeri-kelas.appspot.com",
  messagingSenderId: "631029923220",
  appId: "1:631029923220:web:bd973517d78561033c2381",
  measurementId: "G-ZPGTXMTL2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);