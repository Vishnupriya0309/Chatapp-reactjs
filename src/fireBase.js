import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD500oYFp5W1GXOVPu4Aj145mnZFLiwx-A",
  authDomain: "newchatapp-f4bac.firebaseapp.com",
  projectId: "newchatapp-f4bac",
  storageBucket: "newchatapp-f4bac.appspot.com",
  messagingSenderId: "108084532458",
  appId: "1:108084532458:web:c1f1ff29a0089a938f3393"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore(app);
