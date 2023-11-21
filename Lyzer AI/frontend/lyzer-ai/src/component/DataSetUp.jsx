// components/DataSetUp.js
import React, { useState, useEffect } from "react";
import EditModal from "./EditModal/EditModal";
import axios from "axios";
import styles from "./DataSetUp.module.css";


const DataSetUp = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFileForEdit, setSelectedFileForEdit] = useState(null);

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/files");
      setUploadedFiles(response.data);
    } catch (error) {
      console.error("Error fetching uploaded files:", error);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []); 

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const numberOfFiles = files.length;
    setSelectedFiles([...selectedFiles, ...files]);
    alert(`You have selected ${numberOfFiles} selected`)
  };

  const uploadFiles = async () => {
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append("files", file);
    }

    try {
      await axios.post("http://localhost:5000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSelectedFiles([]);
      fetchUploadedFiles();
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  async function deleteFile(fileId) {
    const updatedFiles = uploadedFiles.filter((file) => file._id !== fileId);
    setUploadedFiles(updatedFiles);
  
    try {
      const response = await axios.delete(`http://localhost:5000/api/files/${fileId}`);
  
      if (response.status === 204) {
        setTimeout(() => {
          alert("File deleted successfully");
        },1000);
      } else {
        console.error("Error deleting file. Status:", response.status);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }


  // Function to open the edit modal with selected file
  const openEditModal = (file) => {
    setSelectedFileForEdit(file);
    setIsEditModalOpen(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setSelectedFileForEdit(null);
    setIsEditModalOpen(false);
  };

  const saveEditedFile = async (fileId, editedText) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/files/${fileId}`, {
        textContent: editedText,
      });
  
      if (response.status === 200) {
        // File saved successfully, you can update the state if needed
        fetchUploadedFiles();
        closeEditModal(); // Close the edit modal
      } else {
        console.error("Error saving file. Status:", response.status);
      }
    } catch (error) {
      console.error("Error saving file:", error);
    }
  };
  
  

  return (

  <div className={styles.container}>
      <h1 className={styles.heading}>Data Set Up</h1>
      <h3 className={styles.subHeading}>
        Manage your documents, sources, and knowledge which Lyzer will use to
        automate/train the chatbot
      </h3>
      <input
        id="fileInput"
        className={styles.dataUploadBtn}
        type="file"
        accept=".doc, .docx, .pdf, .txt, .rtf, .xls, .xlsx"
        multiple
        onChange={handleFileUpload}
      />
      <label htmlFor="fileInput" className={styles.uploadBtnLabel}>
        Choose Files
      </label>

      <button className={styles.uploadBtn} onClick={uploadFiles}>Upload Files</button>

      <div className={styles.box}>
        <h1 className={styles.headingData}>Your Data</h1>
        {uploadedFiles.length > 0 && (
          <table className={styles.fileTable}>
            <thead>
              <tr>
                <th>Upload Date</th>
                <th>Filename</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFiles.map((file, index) => (
                <tr key={index}>
                  <td>{new Date().toLocaleDateString()}</td>
                  <td>{file.filename}</td>
                  <td>
                  <button
              className={styles.editBtn}
              onClick={() => openEditModal(file)} // Open the edit modal on button click
            >
              Edit
            </button>
                    <button className={styles.deleteBtn}  onClick={() => deleteFile(file._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
      </div>
      <button className={styles.createBtn}>Create ChatBot</button>
      
      {selectedFileForEdit && (
  <EditModal
    file={selectedFileForEdit}
    isOpen={isEditModalOpen}
    onSave={saveEditedFile}
    onClose={closeEditModal}
  />
)}

    </div>
  );
};

export default DataSetUp;
