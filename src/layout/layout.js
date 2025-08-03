import React from 'react';
import {  Outlet } from 'react-router-dom';
import "./css/WebLayout.css";
const WebLayout = () => {
  return (
    <div className="container-fluid"> 
        <Outlet />   
    </div>
  )
};

export default WebLayout;