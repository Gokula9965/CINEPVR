// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2LDj1oD1AWKxEDocZNMp593Qay42cmg0",
  authDomain: "fir-auth-cb49b.firebaseapp.com",
  projectId: "fir-auth-cb49b",
  storageBucket: "fir-auth-cb49b.appspot.com",
  messagingSenderId: "88360855173",
  appId: "1:88360855173:web:a52f1028e0afc75ceeabec"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };