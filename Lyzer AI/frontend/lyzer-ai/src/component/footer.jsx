import React from "react";
import styles from "../pages/Home.module.css";

function Footer() {
    const year=new Date().getFullYear();
    return (
        <div className={styles.footer}>
        <hr style={{
            margin:"0 auto 4%",
            width: '80%',
            background: '#000',
            color: '#000',
            borderColor: '#000',
            height: '2px',
            borderRadius:"5px"}}
        />
            <div className={styles.links}>
            <a href="#">Privacy Policy</a>
            <a href="#">Social Impacts</a>
            <a href="#">Contact</a>
            <a href="#">Social Impacts</a>
            </div>
            <div style={{marginTop:"30px"}}>
                <p>Copyright &copy; Lyzer AI {year}</p>
            </div>
        </div>
    );
}
export default Footer;