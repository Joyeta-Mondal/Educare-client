import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfXyx8WkiiZumT_8m_iEzKCG0cIQPZnEo",
  authDomain: "educare-scholarships.firebaseapp.com",
  projectId: "educare-scholarships",
  storageBucket: "educare-scholarships.firebasestorage.app",
  messagingSenderId: "750361532316",
  appId: "1:750361532316:web:471454a4dd3190fbbb5a59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
