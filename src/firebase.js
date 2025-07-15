import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8ncvVPmjOPp0GoRs3h29b0enO_rJfn3U",
  authDomain: "dariahaidabura99.firebaseapp.com",
  projectId: "dariahaidabura99",
  storageBucket: "dariahaidabura99.firebasestorage.app",
  messagingSenderId: "390919618820",
  appId: "1:390919618820:web:6d892fb3817d92cf1d1051",
  measurementId: "G-T5SMYXYTS3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
