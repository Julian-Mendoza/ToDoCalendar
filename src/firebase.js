import { initializeApp } from 'firebase/app';
import { getAnalytics } from'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // If you plan to use Firestore Database
import { getAuth } from 'firebase/auth';  //If you need Authentication
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBl9_kB-2ATNMqB6GTVbyVQ8d6KuYAhY8s",
  authDomain: "todocalendar-b0a6f.firebaseapp.com",
  projectId: "todocalendar-b0a6f",
  storageBucket: "todocalendar-b0a6f.appspot.com",
  messagingSenderId: "122393275536",
  appId: "1:122393275536:web:d659ff12b0fdc8a910fc15",
  measurementId: "G-DR6CKH9BJ9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app); // For Firestore
const auth = getAuth(app); // For Authentication


export { auth, db };


