// QueryPage.js
import React, { useState } from 'react';
import styles from './QueryPage.module.css';

const QueryPage = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      id: new Date().getTime(),
    };

    setItems([...items, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className={styles.queryPage}>
      <h3 className={styles.heading}>Question and Answers</h3>
      <button className={styles.addButton} onClick={handleAddItem}>
        Add
      </button>
      {items.length > 0 ? (
  <div className={styles.container}>
    {items.map((item) => (
      <div className={styles.box} key={item.id}>
        <input type="text" placeholder="Question" className={styles.input}  />
        <input type="text" placeholder="Answer" className={styles.inputAnswer} />
        <button
          className={styles.deleteButton}
          onClick={() => handleDeleteItem(item.id)}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
) : null}

<button className={styles.createBtn}>Create ChatBot</button>
    </div>
  );
};

export default QueryPage;
