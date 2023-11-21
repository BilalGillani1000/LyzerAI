import React from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";
import styles from "../pages/Home.module.css";

function Benefit(props) {

    return (
            <div>
            <Button onClick={() => {
              props.handleClick(props.id);
            }} style={{border:"none", backgroundColor:"#000",color:"#fff", fontSize:"20px",fontWeight:"500", width:"70%", marginBottom:"10px"}}>{props.title}{props.arrow}</Button>
            </div>
    );
}
export default Benefit;