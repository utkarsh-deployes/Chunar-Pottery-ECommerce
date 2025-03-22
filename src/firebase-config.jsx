import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "", //add secret keys
  authDomain: "pottery-e9b23.firebaseapp.com",
  projectId: "pottery-e9b23",
  storageBucket: "pottery-e9b23.firebasestorage.app",
  messagingSenderId: "71952774376",
  appId: "", //add app id
  measurementId: "G-71BR3L492J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, signOut };  // Export signOut here to use in other components
