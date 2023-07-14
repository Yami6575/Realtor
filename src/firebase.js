// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH_xgXwwYAdAw2J84p1F56z-8Bx2tWIS4",
  authDomain: "realtor-react-ab692.firebaseapp.com",
  projectId: "realtor-react-ab692",
  storageBucket: "realtor-react-ab692.appspot.com",
  messagingSenderId: "148429542879",
  appId: "1:148429542879:web:e704ed41a8818ba67b206a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
