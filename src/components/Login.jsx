import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, githubProvider } from "../firebase-config";  // Firebase config
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // Use navigate for redirection

  // Handle Google Sign-in
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In Successful:", user);
      navigate("/dashboard");  // Redirect to dashboard after login
    } catch (error) {
      console.error("Google Sign-In Error:", error.code, error.message);
      setErrorMessage(error.message);
    }
  };

  // Handle GitHub Sign-in
  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;
      console.log("GitHub Sign-In Successful:", user);
      navigate("/dashboard");  // Redirect to dashboard after login
    } catch (error) {
      console.error("GitHub Sign-In Error:", error.code, error.message);
      setErrorMessage(error.message);
    }
  };

  // Handle Email Sign-in or Sign-up
  const handleEmailSignIn = async (e) => {
    e.preventDefault();

    if (isSignup) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Email Signup Successful:", userCredential.user);
        navigate("/dashboard");  // Redirect to dashboard after signup
      } catch (error) {
        console.error("Signup Error:", error.code, error.message);
        setErrorMessage(error.message);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Email Sign-In Successful:", userCredential.user);
        navigate("/dashboard");  // Redirect to dashboard after login
      } catch (error) {
        console.error("Sign-In Error:", error.code, error.message);
        setErrorMessage(error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const toggleSignup = () => setIsSignup(!isSignup);

  return (
    <div className="login-container">
      <h1 className="login-title">{isSignup ? "Sign Up" : "Login"}</h1>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="login-form-container">
      <img src="src\components\login-im.gif" >

      </img>
        <form onSubmit={handleEmailSignIn} className="email-form">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
          <button type="submit" className="login-button">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <button className="toggle-signup" onClick={toggleSignup}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>

        <div className="or-divider">
          <span>OR</span>
        </div>

        <button className="social-button google-button" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <button className="social-button github-button" onClick={signInWithGithub}>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
