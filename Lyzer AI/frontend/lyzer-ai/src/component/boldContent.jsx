import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
import styles from "../pages/Home.module.css";

function BoldContent() {
    const navigate=useNavigate();
    return (
        <div className="col-lg-6" style={{padding:"5% 0 0 5%"}}>
            <div className="">
                <h1 style={{fontSize:"60px", fontWeight:"800", color:"#000"}}>Your Custom AI Sales Assistance, <span className={styles.textGradient}>Ready in Minutes</span></h1>
            </div>
            <div className="" style={{fontSize:"1.1rem"}}>
                <p>
                Upload your documents and website, creating your custom Lyris GPT sales and support assistant - ready to engage with your customers.
                </p>
                <p>
                Once added to your website, Lyris will guide your customers towards their right products and answer questions - thereby increasing conversion rates and engagement.
                </p>
                <button onClick={() => navigate("/data")} className="btn btn-dark btn-md" style={{border:"none",background: "rgb(57,75,199)", background: "linear-gradient(150deg, rgba(57,75,199,1) 50%, rgba(0,0,0,1) 80%)", padding:"8px 15px", fontSize:"1.1rem", fontWeight:"600"}}>Build your Chatbot<ArrowRightAltIcon /></button>
            </div>
        </div>
    )
}
export default BoldContent;
