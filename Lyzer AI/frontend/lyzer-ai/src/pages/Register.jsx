import React, { useState } from "react";
import { auth } from "../utils/init-firebase";
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import styles from "./RegisterPage.module.css"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      const response=await axios.post("http://localhost:5000/newregistration", {email});
      if(response.data.message){
        console.log(response.data.message);
        console.log("New User Added");
      }else {
        console.log("Not Added");
      }
      alert("We have sent you an email verification link");
      
      console.log(user);
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className={styles.formGroup}>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
