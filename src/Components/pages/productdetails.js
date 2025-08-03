import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Sidebar from '../../layout/sidebar';

const WebProductdetails = () => {
  const { id } = useParams();  // get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch product details:", err);
        setLoading(false);
      });
  }, [id]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) return <div className="loading">
  <span className="loading-dots" data-dot="•">•</span>
  <p className="loading-text">Loading Product details</p>
</div>;
  if (!product) return 
  <p>Product not found</p>
  ;

  return (
    
      <div className="container-fluid">
        <Header toggleSidebar={toggleSidebar} />
        <div className="outlet-content">
          <Sidebar isOpen={isSidebarOpen} />
          <div className="content">         
            <div className="container-fluid">
            <div className="pcards">
              <div className="product-card ">
                <div class="ribbon">
                  <span class="ribbon5"> {product.category}</span>
                </div>
                <div className="card-content">
                  <div className="product-pic">
                  <img  src={product.image} alt={product.title}  />
                  </div>
                  <div className="product-info">
                    <span className="product_title">
                      <h2>
                      {product.title}
                      </h2>
                    </span>
                      <p>
                      <strong>Description:</strong> {product.description}
                    </p>
                    <div className="product_details">
                        <p>
                        <strong>Price:</strong> ${product.price}
                      </p>
                      <Link to="/webhub/product">← Back to products</Link>
                    </div>                    
                  </div>
                </div>            
              </div>
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>    
  );
};

export default WebProductdetails;