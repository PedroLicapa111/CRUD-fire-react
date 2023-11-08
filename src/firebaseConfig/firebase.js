import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWimoNGfrOQI0RDePFKz0T_6LbZvZW59I",
  authDomain: "crud-fire-react-7666e.firebaseapp.com",
  projectId: "crud-fire-react-7666e",
  storageBucket: "crud-fire-react-7666e.appspot.com",
  messagingSenderId: "254471023790",
  appId: "1:254471023790:web:6e05048cb281b6c800113f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)