// TextPage.js
import React, { useState } from 'react';
import styles from './TextPage.module.css';

const TextPage = () => {
  const [text, setText] = useState('');

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Text Input</h3>
      <textarea
        type="text"
        id="websiteUrl"
        placeholder="Enter Text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
      />
      <button className={styles.createBtn}>Create ChatBot</button>
    </div>
    
  );
};

export default TextPage;
