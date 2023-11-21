import React, { useState } from "react";

function Suggestion(props) {
    const [hovered,setHovered]=useState(false);
    function mouseOver() {
        setHovered(true);
    }
    function mouseOut() {
        setHovered(false);
    }
    return (
        <div onClick={() => {
            props.handleQuestion(props.id);
        }} onMouseOver={mouseOver} onMouseOut={mouseOut} style={{cursor:"pointer",display:"inline-block", fontSize:"14px", margin:"0 10px 10px 0", backgroundColor: hovered ? "#D0D4CA" : "#EEEEEE", padding:"5px 10px", borderRadius:"10px"}}>
            {props.question}
        </div>
    );
}
export default Suggestion;