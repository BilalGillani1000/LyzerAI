import React from "react";
import styles from "../pages/Home.module.css";
import SendIcon from '@mui/icons-material/Send';

function DemoChat() {
    return (
        <div className="col-lg-6" style={{}}>
            <div className={styles.demoChat} style={{border:"1px solid black", borderRadius:"10px", width:"55%", margin:"5% auto 0", backgroundColor:"black"}}>
                <div className="" style={{padding:"10px", color:"#fff", fontSize:"10px"}}>
                    <h4>Lyzer-AI</h4>
                    <hr
                        style={{
                            margin:"0 auto 10px",
                            width: "98%",
                        background: '#fff',
                        color: '#fff',
                        borderColor: '#fff',
                        height: '2px',
                        borderRadius:"5px"
                    }}
                    />
                    <div className={styles.demoChatDiv} style={{backgroundColor:"#5272F2", padding:"2%", borderRadius:"5px",display:"inline-block"}}>
                            Hi! What is Lyzer-AI?
                    </div>
                    <div className={styles.demoChatDiv} style={{backgroundColor:"#EEEEEE",color:"black",width:"80%", padding:"2%", borderRadius:"5px"}}>
                            Hello! Lyzer-AI is your custom Ai sales assistance. It helps you in your business.
                    </div>
                    <div className={styles.demoChatDiv} style={{backgroundColor:"#5272F2", padding:"2%", borderRadius:"5px"}}>
                            That's great! But tell me how?
                    </div>
                    <div className={styles.demoChatDiv} style={{backgroundColor:"#EEEEEE",color:"black",width:"80%",  padding:"2%", borderRadius:"5px"}}>
                            You can train me according to your needs and use your chatbot to your custom domains.
                    </div>
                    <div className={styles.demoChatDiv} style={{backgroundColor:"#5272F2", padding:"2%", borderRadius:"5px"}}>
                            Can I connect my chatbot to mu custom domain?
                    </div>
                    <div className={styles.demoChatDiv} style={{backgroundColor:"#EEEEEE",color:"black",width:"80%",  padding:"2%", borderRadius:"5px"}}>
                            Yes, you can create you own chatbot and apply it to your domain as easy as possible.
                    </div>
                    <div style={{width:"100%", height:"25px", border:"1px solid #fff", borderRadius:"5px", marginTop:"50px", textAlign:"right"}}>
                    <SendIcon style={{fontSize:"20px", margin:"2px 5px auto 0"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DemoChat;