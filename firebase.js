// Import the functions you need from the SDKs you need
import firebase from 'firebase'
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyD9hJNp7ie_fBaWflcWVvShay8pd5cRw6A",
  authDomain: "taskapp-ec180.firebaseapp.com",
  projectId: "taskapp-ec180",
  storageBucket: "taskapp-ec180.appspot.com",
  messagingSenderId: "588850077342",
  appId: "1:588850077342:web:a48928e9758d1790c8a58f",
  measurementId: "G-5WHK3MCBXW"
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