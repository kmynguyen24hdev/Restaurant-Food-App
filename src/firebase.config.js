import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import  {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA4ooVqM5iDGc1bCdoRuZzPKzydWVbxgzM",
  authDomain: "restaurantapp-1565e.firebaseapp.com",
  databaseURL: "https://restaurantapp-1565e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-1565e",
  storageBucket: "restaurantapp-1565e.appspot.com",
  messagingSenderId: "806708587700",
  appId: "1:806708587700:web:c59013dc5ce6c6769d7be1"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)

const storage = getStorage(app);

export {app, firestore, storage}