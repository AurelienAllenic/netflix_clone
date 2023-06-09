import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBp3pLcS8GnBAFOFVJZW3J3QiNwzaO-D_Q",
  authDomain: "netflix-clone-bc8f1.firebaseapp.com",
  projectId: "netflix-clone-bc8f1",
  storageBucket: "netflix-clone-bc8f1.appspot.com",
  messagingSenderId: "192864064888",
  appId: "1:192864064888:web:8c93f838e208d8f54ee48d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth();

export {auth}
export default db;