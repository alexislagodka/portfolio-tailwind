// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZahDtTP_I-Zv9iQKFBxYIDDgOGSBui3M',
  authDomain: 'portfolio-tailwind-60b39.firebaseapp.com',
  databaseURL: 'https://portfolio-tailwind-60b39-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'portfolio-tailwind-60b39',
  storageBucket: 'portfolio-tailwind-60b39.appspot.com',
  messagingSenderId: '249599945517',
  appId: '1:249599945517:web:f56227a871b031f3c281a4',
  measurementId: 'G-RWPZSMZFWZ'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
