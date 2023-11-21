import React, { useState } from "react";
import Navbar from "../component/navbar";
import styles from "./SignInPage.module.css"; // Import the modular CSS file
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getAuth } from "firebase/auth";

const auth=getAuth();

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential.user);
    navigate("/");
    // ...
  })
  .catch((error) => {
    console.log(error);
    alert("Invalid Credentials");
  });
    
  };

  const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          console.log(result);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error in signing in");
      });
     
  };

  return (
    <>
      <div style={{padding:"0 3%"}}>  
      <Navbar />
      </div>
      <div className={styles.signInContainer}>
        <h2>Sign In</h2>
        <form onSubmit={async (e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSignIn}
            className={styles.signInButton}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className={styles.googleSignInButton}
          >
            Sign In with Google
          </button>
        </form>
        <p style={{color:"black"}}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
