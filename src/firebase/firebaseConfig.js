import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiF9x2ff2TxAtRnsx9J20AG8kKu9oMRVY",
  authDomain: "a3m-smm.firebaseapp.com",
  projectId: "a3m-smm",
  storageBucket: "a3m-smm.appspot.com",
  messagingSenderId: "934953575945",
  appId: "1:934953575945:web:7d24fd78827b35bd7afad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
