import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDZjj_YBpFx0qVvY7veKhnhGNUbk7i4N5M",
  authDomain: "text-d8ae4.firebaseapp.com",
  projectId: "text-d8ae4",
  storageBucket: "text-d8ae4.appspot.com",
  messagingSenderId: "687167514006",
  appId: "1:687167514006:web:c76761a4accff6ef3429b7"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export {db};