import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Sidebar from '../../layout/sidebar';

const Userdetails = () => {
  const { id } = useParams();  // get product id from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">
  <span className="loading-dots" data-dot="•">•</span>
  <p className="loading-text">Loading User details</p>
</div>;

  if (!user) return <p>User not found</p>;

  return (
    <div className="container-fluid">
      <Header toggleSidebar={toggleSidebar} />
      <div className="outlet-content">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content">
          <div className="container-fluid">
          <Link to="/webhub/user" className="links">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp; Back to
        User list{" "}
      </Link>
      <div className="cards">
        <div className="icon"></div>
      </div>
      <div className="avatar-wrapper">
        <div className="avatar">
          <div className="avatar-inner"></div>
          <div className="avatar-glow"></div>
          <div className="avatar-border"></div>
          <div className="intial">
            {user.name.firstname[0]}
            {user.name.lastname[0]}
          </div>
        </div>
      </div>
      <h2>
        {user.name.firstname} {user.name.lastname}
      </h2>
      <p>
        <strong>Email:</strong> ${user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>userName:</strong> {user.username}
      </p>
      <p>
        <strong>Pasword:</strong> {user.password}
      </p>
          </div>
        </div>
      </div>
      <Footer />      
    </div>
  );
};

export default Userdetails;