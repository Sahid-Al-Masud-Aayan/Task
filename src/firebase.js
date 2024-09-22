
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCuqjE_hkhjY_Tte4Wevbjp4pVT8NuyF4E",
  authDomain: "task-485c1.firebaseapp.com",
  projectId: "task-485c1",
  storageBucket: "task-485c1.appspot.com",
  messagingSenderId: "505801754281",
  appId: "1:505801754281:web:3e132c6f8e8f8211150bb8",
  measurementId: "G-SJCSDY6XKQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const mainFirebaseData = getDatabase(app)

export const db = getDatabase(app);