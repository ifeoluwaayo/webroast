import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCj2BFLq-j0xI_GarNwvUirUg5rqYRReHA",
  authDomain: "webroast-2d4d5.firebaseapp.com",
  projectId: "webroast-2d4d5",
  storageBucket: "webroast-2d4d5.appspot.com",
  messagingSenderId: "29510291755",
  appId: "1:29510291755:web:668029e8d7d164d833f56e",
  measurementId: "G-124KX1516X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
