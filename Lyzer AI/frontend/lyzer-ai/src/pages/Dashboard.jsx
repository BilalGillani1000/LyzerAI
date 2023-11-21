import React from 'react';
import Sidebar from '../component/Sidebar'; // Import the Sidebar component
import styles from './Dashboard.module.css'; // Import the modular CSS file
import DataSetUp from '../component/DataSetUp';
import Website from './Website/Website';
import TextPage from './TextPage/TextPage';
import QueryPage from './Q&A/Q&A';

const Dashboard = () => {
  const pathname = window.location.pathname;

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
      {pathname === "/data" ? (
        <DataSetUp />
      ) : pathname === "/text" ? (
        <TextPage
      
      />
      ) : pathname === "/query" ? (
        <QueryPage />
      ) : pathname === "/website" ? (
        <Website />
      ): (
        alert("error")
      )}
      </div>
     
    </div>
  );
};

export default Dashboard;
