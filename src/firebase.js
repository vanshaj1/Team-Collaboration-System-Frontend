import firebase from 'firebase'


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChsK_NepKfbdptYEleqxxNcIXLDEn6Bn0",
    authDomain: "team-colloboration-system.firebaseapp.com",
    projectId: "team-colloboration-system",
    storageBucket: "team-colloboration-system.appspot.com",
    messagingSenderId: "146102978544",
    appId: "1:146102978544:web:dd16d888b5d5713ecd3f35"
  };
  

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }