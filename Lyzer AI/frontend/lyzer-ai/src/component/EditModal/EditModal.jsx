// components/EditModal.js

import React, { useState } from "react";
import styles from "./EditModal.module.css"; // Import the CSS file

const EditModal = ({ file, isOpen, onSave, onClose }) => {
  const [editedText, setEditedText] = useState(file.textContent);

  const handleSave = () => {
    onSave(file._id, editedText);
    onClose();
  };

  return (
    <div className={styles["edit-modal"]} style={{ display: isOpen ? "block" : "none" }}>
      <div className={styles["edit-modal-content"]}>
        <h2>Edit File</h2>
        <textarea
          className={styles["edit-modal-textarea"]}
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          rows={10}
          cols={40}
        />
        <button className={styles["edit-modal-button"]} onClick={handleSave}>Save</button>
        <button className={`${styles["edit-modal-button"]} ${styles["edit-modal-cancel"]}`} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
