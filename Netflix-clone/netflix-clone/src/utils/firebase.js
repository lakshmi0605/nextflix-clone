// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_VARIABLES } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_VARIABLES.FIREBASE_API_KEY,
  authDomain: FIREBASE_VARIABLES.FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_VARIABLES.FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_VARIABLES.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_VARIABLES.FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_VARIABLES.FIREBASE_APP_ID,
  measurementId: FIREBASE_VARIABLES.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);