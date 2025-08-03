import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import WebButton from "../Components/util/web-button";

const Header = ({ toggleSidebar }) => {

  const [mode, setMode] = useState("auto");
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const navigate = useNavigate();

   // default to 'auto'
  useEffect(() => {

      const html = document.querySelector("html"); 
  
      if (mode === "light") {
        switchLight();
      } else if (mode === "dark") {
        switchDark();
      } else if (mode === "auto") {
        switchAuto();
      }
    }, [mode]);
    console.log(localStorage.getItem('username'));
    
    const switchDark = () => {
      document.querySelector("html").style.setProperty("color-scheme", "dark");
    };
    const switchLight = () => {
      document.querySelector("html").style.setProperty("color-scheme", "light");
    };

    const switchAuto = () => {
      document
        .querySelector("html")
        .style.setProperty("color-scheme", "light dark");
    };
    const switchMode = (event) => {
      setMode(event.target.value); // Update mode when select value changes
    };

     useEffect(() => {
        if (user) {
          localStorage.setItem('usernme', user);
          console.log(localStorage.setItem('usernme', user));
        } else {
          localStorage.removeItem('usernme');
        }
      }, [user]);

      useEffect(() => {
        
        if(!localStorage.getItem("token")) {
          localStorage.removeItem('token');
          navigate("/login");
        }
      }, [])
      
    const logout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.reload();
      navigate('/login');
    };
     
  return (
    <header className="header">
       <div className="column">
          <a onClick={toggleSidebar}><i className="fa-regular fa-bars fw fa-2x">&nbsp;</i></a>    
       </div>
        <div className="column"> <div className='logo'>  <i className="fa-duotone fa-solid fa-spider-web fa fw-2x text-ce"> &nbsp;</i> WebHub </div></div>
        <div className="column">
          <div className="theme">            
            <select onChange={switchMode} value={mode}>
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
              <option value="auto">Auto Mode</option>
            </select>
          </div>
         
          Welcome <strong>{user}</strong>    
          {user && ( 
          <WebButton className="outline-mini-danger" onClick={logout} >
            {" "}
            <i className="fas fa-paper-plane">&nbsp;</i> Logout{" "}
          </WebButton>      
          )} 
          </div>
    </header>
  );
};

export default Header;