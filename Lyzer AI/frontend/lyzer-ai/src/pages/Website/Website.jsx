import React, { useState } from 'react';
import styles from "./websitepage.module.css";

const Website = () => {
  const [url, setUrl] = useState('');
  

  const handleFetchData = async () => {

  };

  return (
    <div className={styles.websitePage}>
        <h1 className={styles.heading}>Website</h1>
      <label className={styles.subHeading} htmlFor="websiteUrl">Enter Website URL:</label>
      <input
        type="text"
        id="websiteUrl"
        placeholder="Enter website URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className={styles.fetchBtn} onClick={handleFetchData}>Fetch Links</button>

      <div>
        {/* Display the fetched text */}
        {}
      </div>

      <button className={styles.createBtn}>Create ChatBot</button>
    </div>
  );
}

export default Website;
