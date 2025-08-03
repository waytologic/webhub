import React, { useState } from 'react';
import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";

import Footer from "../../layout/footer";

const WebHome = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="container-fluid">
      <Header toggleSidebar={toggleSidebar} />
      <div className="outlet-content">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content">
          <div className="container-fluid">
            <h1> Home Page </h1>
            <br/>
            <p>Welcome to home page </p>
          </div>         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebHome;
