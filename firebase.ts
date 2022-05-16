// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIxaQWNNZVPerGGomKO0PntaM_sR_2jqE",
  authDomain: "netflix-clone-1997b.firebaseapp.com",
  projectId: "netflix-clone-1997b",
  storageBucket: "netflix-clone-1997b.appspot.com",
  messagingSenderId: "616865339093",
  appId: "1:616865339093:web:e7bcbc4867c597e824b45c"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }