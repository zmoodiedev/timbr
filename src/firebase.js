import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDTXN9SmZ0GlNlpyj34urOuyCFhxgYuzec",
  authDomain: "tmbr-bceec.firebaseapp.com",
  projectId: "tmbr-bceec",
  storageBucket: "tmbr-bceec.appspot.com",
  messagingSenderId: "84917962249",
  appId: "1:84917962249:web:c3a8a4ee5ac64ff0b19ad8",
  measurementId: "G-4MB1W3CJCS"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }