// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl8CGSDH4G5IIQunmwWuf2yvveE8jlvog",
  authDomain: "netflix-clone-a4df6.firebaseapp.com",
  projectId: "netflix-clone-a4df6",
  storageBucket: "netflix-clone-a4df6.appspot.com",
  messagingSenderId: "503985726948",
  appId: "1:503985726948:web:79443632064870c11453f1",
  measurementId: "G-XGE6P8YF85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();