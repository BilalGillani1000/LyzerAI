import React, { useEffect, useState } from 'react';
import styles from "./websitepage.module.css";
import axios from "axios";
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Website = () => {
  const auth =getAuth();
  const [url, setUrl] = useState("");
  const[result,setResult]=useState(null);
  const [totalWordCount,setWordCount]=useState(0);
  console.log(auth.currentUser.email);
  const navigate=useNavigate();


  const fetchWordCount = async () => {
      try {
        const response= await axios.post("http://localhost:5000/request/wordcount", {name:auth.currentUser.email});
        console.log(response);
        setWordCount(response.data.wordCount);
      } catch (error) {
        console.error("Error fetching word count:", error.message);
      }
  };
  useEffect(() => {
    fetchWordCount();
  }, []);

  const handleSubmit=async (e) => {
    e.preventDefault();
    console.log(url);
    console.log(auth.currentUser.email);
    try {
      const response = await axios.post('http://localhost:5000/crawl', { url,name:auth.currentUser.email });
      // console.log(response);
      navigate("/website");
      setWordCount(response.data.newNum);
      setResult(response.data.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const isButtonDisabled = totalWordCount >= 1000000;

  return (
    <div className={styles.websitePage}>
        <h1 className={styles.heading}>Website</h1>
        <p>Total Letters Searched: {totalWordCount}</p>
      <label className={styles.subHeading} htmlFor="websiteUrl">Enter Website URL:</label>
      <input
        type="text"
        id="websiteUrl"
        placeholder="Enter website URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className={styles.fetchBtn} disabled={isButtonDisabled} onClick={handleSubmit}>Fetch Links</button>

        {/* Display the fetched text */}
        {result && (
        <div>
          <h2>List of Links</h2>     
          <ul>
            {result.map((item, index) => (
              <li key={index}>{item.url}</li>
            ))}
          </ul>
        </div>
      )}


      <button className={styles.createBtn}>Create ChatBot</button>
    </div>
  );
}

export default Website;
