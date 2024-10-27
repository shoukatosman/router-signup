// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIuzyLI_AE9HsS51IpQzRmTM0VXDQ_l2I",
  authDomain: "mern-242-1.firebaseapp.com",
  projectId: "mern-242-1",
  storageBucket: "mern-242-1.appspot.com",
  messagingSenderId: "767413718707",
  appId: "1:767413718707:web:2ab187a31cfe7515f3aac6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app