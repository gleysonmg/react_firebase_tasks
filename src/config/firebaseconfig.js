import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0xlU-lPrrmnpSUDOt7W1AEe98mK3phgM",
  authDomain: "task-c0086.firebaseapp.com",
  projectId: "task-c0086",
  storageBucket: "task-c0086.appspot.com",
  messagingSenderId: "823410064312",
  appId: "1:823410064312:web:f2f9d07d9468d02a356d4d"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const database = app.firestore();

export default database;