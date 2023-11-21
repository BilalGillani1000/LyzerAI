import React, { useEffect, useState } from "react";
import LiveDemoButton from "./liveDemoButton";
import styles from "../pages/Home.module.css";
import samples from "../sampleQueries";
import Suggestion from "./suggestedQuestion";
import UserQAns from "./userQuestion";

function LiveDemo() {
    const [expanded,setExpanded]=useState(false);
    function handleToggle() {
        setExpanded(!expanded);
    }
    
    const [qAns,setQAns]=useState([]);
    const [hovered,setHovered]=useState(false);
    useEffect(() => {
        const answerDiv = document.getElementById("answerDiv");
      
        if (answerDiv) {
          answerDiv.innerHTML = "Hello Boy";
        }
      }, [qAns]);
    function handleQuestion(id) {
        const que={
            question:samples[id].question,
            answer:samples[id].answer
        };
        setQAns((preQAns) => {
            return [...preQAns,que];
        });
        console.log(que);
        console.log(qAns);
    }
    function mouseOver() {
        setHovered(true);
    }
    function mouseOut() {
        setHovered(false);
    }
    

    return (
        <div style={{padding:"0 15%"}}>
        <div onMouseOver={mouseOver} onMouseOut={mouseOut} style={{borderRadius:"10px", width:"70%", margin:"0 auto 0", boxShadow: hovered ? "-6px 10px 18px 5px rgba(0,0,0,0.5)" : "none", webkitBoxShadow: hovered ? "-6px 10px 18px 5px rgba(0,0,0,0.5)" : "none", mozBoxShadow: hovered ? "-6px 10px 18px 5px rgba(0,0,0,0.5)" : "none"}}>
        <LiveDemoButton expanded={expanded} onClick={handleToggle} hovered={hovered} />
        </div>
        <div style={{margin:"30px 0 30px", textAlign:"center", fontSize:"1rem"}}>
            <p>This chatbot was trained on a document explaining Lyzer AI.</p>
            <p>You can embed a widget like this on any page on your website!</p>
        </div>
        <div className={`${styles.fixedDiv} ${expanded ? styles.open : ''}`}>
        <div className={styles.scrollContent}>
        <div style={{width:"70%"}}>
            <div style={{backgroundColor:"#EEEEEE", padding:"5px 10px", marginBottom:"15px", borderRadius:"10px", display:"inline-block"}}>Hi I am Lyzer AI. How can I help you?
            </div>
        </div>
        <div style={{width:"70%"}}>
            <div style={{backgroundColor:"#EEEEEE", padding:"5px 10px", marginBottom:"15px", borderRadius:"10px", display:"inline-block"}}>Do u have any question? Feel free to ask me.
            </div>
        </div>
        {qAns.map((question,index) => {
            return (
                <UserQAns key={index} question={question.question} answer={question.answer} />
            );
        })}
        </div>
        <div className={styles.questionDiv}>
        <div className={styles.horizontalScrollContent}>
        {samples.map((sample,index) => {
            return (
                <Suggestion key={index} handleQuestion={handleQuestion} question={sample.question} id={index} />
            );
        })}
        </div>
      </div>
        </div>
            
        </div>
    );
}
export default LiveDemo;