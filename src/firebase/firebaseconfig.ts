// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc0kMUkhV8suLCJQc296a1OcvegvRdKVc",
  authDomain: "fgl-website-2f01c.firebaseapp.com",
  projectId: "fgl-website-2f01c",
  storageBucket: "fgl-website-2f01c.appspot.com",
  messagingSenderId: "511465084704",
  appId: "1:511465084704:web:b33f74cf55df73a7bae945",
  measurementId: "G-L4XJRZSK3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;