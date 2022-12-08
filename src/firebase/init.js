// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUSeAXzqRDuO9yJAywi4ISkg6zP-4DP1M",
  authDomain: "weekplanner-task.firebaseapp.com",
  databaseURL: "https://weekplanner-task-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weekplanner-task",
  storageBucket: "weekplanner-task.appspot.com",
  messagingSenderId: "7676286599",
  appId: "1:7676286599:web:2e9942a6fdd2dcfb3e0a22",
  measurementId: "G-6Z21WCNQZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// init firestore service
const database = getDatabase(app);
export default database;