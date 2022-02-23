// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt0pi4YZBtZIvMABdCUqaV3wkO-c_GRRo",
  authDomain: "fernando-firestore-e28ee.firebaseapp.com",
  projectId: "fernando-firestore-e28ee",
  storageBucket: "fernando-firestore-e28ee.appspot.com",
  messagingSenderId: "330246625533",
  appId: "1:330246625533:web:73b8350564fc1f2ea58694",
  measurementId: "G-V2TWNNYG9Y"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase.firestore();