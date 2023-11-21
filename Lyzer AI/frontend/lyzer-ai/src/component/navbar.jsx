import React from "react";
import styles from "../pages/Home.module.css";

function Navbar() {
    return (
        <div className={styles.Navbar}>
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" style={{fontSize:"1.8rem", fontWeight:"600"}} href="#">Lyzer AI</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto" style={{fontWeight:500, marginRight:"5%"}}>
                <li className="navbar-item">
                    <a className="nav-link" href="#">Use Cases</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href="#">Social Impacts</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href="#">Privacy Policy</a>
                </li>  
            </ul>
        </div>
        </nav>
        </div>
    );
}
export default Navbar;