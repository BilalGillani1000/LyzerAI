import React from "react";
import { Button } from "react-bootstrap";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from "../pages/Home.module.css";

function LiveDemoButton(props) {
    return (
        <div className="d-grid" onClick={props.onClick}>
      <Button style={{border:"none",backgroundColor: props.hovered ? "#3F3FF2" : "#000", fontSize:"2rem", fontWeight:"600"}} size="lg">
        Live Demo Chat{props.expanded ? <ExpandLessIcon style={{marginLeft:"10px"}} /> : <ExpandMoreIcon style={{marginLeft:"10px"}} />}
      </Button>
    </div>
    );
}
export default LiveDemoButton;