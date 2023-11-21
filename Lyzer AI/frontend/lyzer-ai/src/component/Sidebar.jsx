import React from "react";
import styles from "./Sidebar.module.css"; // Import the modular CSS file
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
const Sidebar = () => {
  const navigate = useNavigate();
  const auth=getAuth();

  const handleLogout = async () => {
    // console.log("hello from handle");
    signOut(auth)
      .then(() => {
        navigate("/signin");
        console.log("Signed Out");
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.heading}>Lyzer-AI</h1>
      <div className={styles.sidebardiv} onClick={()=>navigate("/data")}>Data SetUp</div>
      <div className={styles.sidebardiv} onClick={()=>navigate("/website")}>Website</div>
      <div className={styles.sidebardiv} onClick={()=>navigate("/text")}>Text</div>
      <div className={styles.sidebardiv} onClick={()=>navigate("/query")}>Q&A</div>
      <div className={styles.sidebardiv} onClick={handleLogout}>SignOut</div>
    </div>
  );
};

export default Sidebar;
