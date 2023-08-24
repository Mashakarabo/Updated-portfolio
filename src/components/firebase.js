import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmbsxP26JwPUtluPFB-oD-bVE2LB_xvaU",
  authDomain: "my-contact-data.firebaseapp.com",
  projectId: "my-contact-data",
  storageBucket: "my-contact-data.appspot.com",
  messagingSenderId: "333120748631",
  appId: "1:333120748631:web:6a5df43a05a7f5c0737712"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);