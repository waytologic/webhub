// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconInput from './Components/util/iconInput';
import WebButton from './Components/util/web-button';


const Login = () => {

  const [username, setUsername] = useState("kevinryan");
  const [password, setPassword] = useState("kev02937@");
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
       
      
      const data = await res.json();
      //console.log("Token",data.token);
      
      if (data.token) {        
        console.log("Token : ",data.token);
        const userResponse = await fetch('https://fakestoreapi.com/users');
        const users = await userResponse.json();
        console.log(users);
        
        const matchedUser = users.find((u) => u.username === username);
        console.log("user P : ", matchedUser); 
        console.log("user  : ",matchedUser.name.firstname); 
        console.log("Email  : ",matchedUser.email);

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', matchedUser.username);    
     
        console.log("Toker : ",data.token);
        console.log("current user : ",matchedUser.username);
        console.log("User login success !!");
      
        navigate('/webhub/home'); // redirect to product list
        window.location.reload();
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>      
        <div className="group_item">        
            <IconInput            
                type="text"
                value={username}                
                placeholder="Enter your Username"
                pattern="[a-zA-Z0-9]*"
                required
                className="customIconinput"
                icon="fa-light fa-user"
                onChange={e => setUsername(e)}
            />       
        </div> 
        <div className="group_item">        
            <IconInput
                type="password"
                value={password}               
                placeholder="Enter your Password"                
                required
                className="customIconinput"
                icon="fa-regular fa-lock-keyhole"
                onChange={e => setPassword(e)}
            />       
        </div>         
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <section className="Solid-buttons">
        <div className="group_item">
          <WebButton className="primary" type="submit">
            {" "}
            <i className="fas fa-paper-plane">&nbsp;</i>  Login{" "}
          </WebButton>
        </div>
      </section>
        {/* <button style={{ marginTop: '1rem' }} >Login</button> */}
      </form>      
    </div>
  );
};

export default Login;