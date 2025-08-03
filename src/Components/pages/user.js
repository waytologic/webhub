import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Sidebar from '../../layout/sidebar';

const Webuser = () => {

      
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);

      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
      
      
      const [imageUrl, setImageUrl] = useState('https://randomuser.me/api/portraits/men/75.jpg');
      useEffect(() => {
          fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => {
              setUsers(data);
              console.log(data);
              setLoading(false);
            })
            .catch(err => {
              console.error("Failed to fetch users:", err);
              setLoading(false);
            });
        }, []);
            
      if (!users) return 
      <p>Users are not found</p>
      ;
      if (loading) return <div className="loading">
      <span className="loading-dots" data-dot="•">•</span>
      <p className="loading-text">Loading Users</p>
    </div>;

  return (
    <div className="container-fluid">
        <Header toggleSidebar={toggleSidebar} />
           <div className="outlet-content">
              <Sidebar isOpen={isSidebarOpen} />
              <div className="content">
                  <div className="container-fluid">
                  <h1><i className="fa-regular fa-users">&nbsp;</i> Users List </h1>
                    <br />
                    <section>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                      
                        {users.map((user) => (
                          <div className="profile-card">
                          <div className="card-content">
                            <div className="avatar-wrapper">
                              <div className="avatar">
                                <div className="avatar-inner"></div>
                                <div className="avatar-glow"></div>
                                <div className="avatar-border"></div>
                                <div className="intial">{user.name.firstname[0]}{user.name.lastname[0]}</div>
                              </div>
                            </div>
                            <div className="profile-info">
                              <h2 className="name">{user.name.firstname} {user.name.lastname}</h2>
                              <p className="title">Senior Product Designer</p>
              
                              <div className="stats">
                                <div className="stat">
                                  <span className="stat-value">Email</span>
                                  <span className="stat-label">{user.email}</span>
                                </div>
                                <div className="stat">
                                  <span className="stat-value">Phone</span>
                                  <span className="stat-label">{user.phone} </span>
                                </div>{" "}
                              </div>
                              <div className="actions">
                              <Link to={`/webhub/user/${user.id}`}>
                                <button className="action-btn primary">
                                  <span>View More </span>
                                  <div className="btn-effect"></div>
                                </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="card-shine"></div>
                          <div className="card-border"></div>
                          <div className="card-glow"></div>
                        </div>
                        ))}
                      </div>
                    </section>
                  </div>
              </div>
           </div>
        <Footer /> 
    </div>
  );
};

export default Webuser;