import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import WebLayout from "./layout/layout";
import Login from "./login";
import WebHome from "./Components/pages/home";
import Webtest from "./Components/pages/test";
import Webproduct from "./Components/pages/products";
import WebProductdetails from "./Components/pages/productdetails";
import Webuser from "./Components/pages/user";
import Userdetails from "./Components/pages/userdetails";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [username, setUsername] = useState(
    localStorage.getItem("user") || null
  );

  const [user, setUser] = useState(localStorage.getItem("user"));
  localStorage.setItem("username", username);

  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      console.log(token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (username) {
      localStorage.setItem("user", username);
      console.log(username);
    } else {
      localStorage.removeItem("user");
    }
  }, [username]);

  const logout = () => {
    setToken(null);
    setUsername(null);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/f737751420.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/webhub"
            element={
              <ProtectedRoute>
                <WebLayout />
              </ProtectedRoute>
            }
          />
          <Route index path="/webhub/home" element={<WebHome />} />
          <Route path="/webhub/test" element={<Webtest />} />
          <Route path="/webhub/product" element={<Webproduct />} />
          <Route path="/webhub/product/:id" element={<WebProductdetails />  } />
          <Route path="/webhub/user" element={<Webuser />} />
          <Route path="/webhub/user/:id" element={<Userdetails />  } />
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>  
  );
}

export default App;