import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import testimonials from "../testimonials";
import styles from "../pages/Home.module.css";
function Testimonial() {
    return (
        <div className={styles.carousel}>
        <div style={{marginBottom:"5%"}}>
            <h1 style={{fontWeight:"700"}}>Random remarks about Lyzer AI</h1>
        </div>
            <Carousel slide={false} data-bs-theme="dark" style={{backgroundColor:"#EEEEEE", paddingTop:"5%", borderRadius:"10px", boxShadow: "0px 7px 18px 0px rgba(0,0,0,0.6)", webkitBoxShadow: "0px 7px 18px 0px rgba(0,0,0,0.6)", mozBoxShadow: "0px 7px 18px 0px rgba(0,0,0,0.6)"}}>
        {
            testimonials.map((testimonial,index) => {
                return (
                    <CarouselItem key={index}>
                    <div className={styles.testimonial}>
                    <h3 style={{fontWeight:"600", lineHeight:"1.4"}}>{testimonial.comment}</h3>
                    <p style={{fontSize:"1.2rem", fontWeight:"500", marginTop:"50px"}}>{testimonial.name}</p>
                    </div>
                    </CarouselItem>
                );
            })
        }
        </Carousel>
        </div>
    );
}
export default Testimonial;