import React from "react";
import Typewriter from "typewriter-effect";

function UserQAns(props) {
    return (
        <div>
            <div style={{width:"70%"}}>
                <div style={{backgroundColor:"#5272F2", padding:"5px 10px", marginBottom:"15px", borderRadius:"10px", display:"inline-block" , color:"#fff"}}>
                {props.question}
                </div>
            </div>
            <div style={{width:"70%"}}>
                <div style={{backgroundColor:"#EEEEEE", padding:"5px 10px", marginBottom:"15px", borderRadius:"10px", display:"inline-block"}}>
                    <Typewriter 
                        options={{cursor:"", loop:false}}
                        onInit={(typewriter) => {
                    typewriter
                        .pauseFor(600)
                        .changeDelay(25)
                        .typeString(props.answer)
                        .start();
                }}
                    />
                </div>
            </div>
        </div>
    );
}
export default UserQAns;