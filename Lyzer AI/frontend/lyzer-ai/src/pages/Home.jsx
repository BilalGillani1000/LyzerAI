import React, { useState } from "react";
import Navbar from "../component/navbar";
import HeroSection from "../component/HeroSection";
import Benefit from "../component/lyzerBenefits";
import benefits from "../benefits";
import Testimonial from "../component/testimonials";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import LiveDemo from "../component/liveDemo";
import Footer from "../component/footer";
import styles from "./Home.module.css";
import { auth } from "../utils/init-firebase";


const Home = () => {
    console.log(auth.currentUser);
    const [benefit,setBenefit]=useState({});
    const [opened,setOpened]=useState(false);
    const[fresh,setFresh]=useState(true);
    function handleClick(id) {

        setFresh(false);
        setBenefit({
            currentTitle:benefits[id].title,
            currentContent:benefits[id].content
        })
    }
    return (
        <div>
            <div className={styles.homePage}>
            <Navbar />
            <HeroSection />
            <div className="row" style={{padding:"10% 0"}}>
            <div style={{marginBottom:"5%", textAlign:"center"}}>
                <h1 style={{fontWeight:"700", color:"#000"}}>How can Lyzer AI help your Business?</h1>
            </div>
            <div className="col-6">
                <div style={{textAlign:"center"}}>
                {benefits.map((benefit,index) => {
                return (
                    <Benefit key={index} id={index} handleClick={handleClick} title={benefit.title} content={benefit.content} arrow={benefit.symbol}/>
                );
                })}
                </div>
            </div>
            <div className="col-6">
                <div className={styles.benefitDiv} style={{backgroundColor:"#EEEEEE",color:"#000",padding:"0 5%", border:"none", margin:"0 5% 0", height:"100%", borderRadius:"5px"}}>
                    <h4 style={{paddingTop:"10px"}}>{fresh ? benefits[0].title : benefit.currentTitle}</h4>
                    <hr
                        style={{
                            margin:"0 auto 10px",
                            width: "98%",
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '2px',
                        borderRadius:"10px"
                    }}
                    />
                    <p style={{fontSize:"1.2rem"}}>{fresh ? benefits[0].content: benefit.currentContent}</p>
                </div>
            </div>
            </div>
            <LiveDemo />
            <Testimonial />
        </div>
        <Footer />
        </div>

    );
}
export default Home;