import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB9jBK2ARJn6X14R42MIKObA8fZ5j-0zx4",
    authDomain: "erudite-7337a.firebaseapp.com",
    databaseURL: "https://erudite-7337a.firebaseio.com",
    projectId: "erudite-7337a",
    storageBucket: "erudite-7337a.appspot.com",
    messagingSenderId: "280723053658",
    appId: "1:280723053658:web:8c326f411a95e1b7784c63",
    measurementId: "G-BG6K1QH5LJ"
  };
  let instance = null;
  export default function getFirebase() {
    if (typeof window !== 'undefined') {
      if (instance) return instance;
      instance = firebase.initializeApp(firebaseConfig);
      return instance;
    }
  
    return null;
  }