import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import Footer from "../../layout/footer";

const Webproduct = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
    
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">
  <span className="loading-dots" data-dot="•">•</span>
  <p className="loading-text">Loading Products</p>
</div>;


  return (
    <div className="container-fluid">
      <Header toggleSidebar={toggleSidebar} />
      <div className="outlet-content">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content">
          <div className="container-fluid">
          <h1>
              {" "}
              <i className="fa-regular fa-rectangle-vertical-history">&nbsp;</i>{" "}
              Product List{" "}
            </h1>           
            <br />
            <section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {products.map((product) => (
            <div className="cards">
              <div className="profile-card" key={product.id}>
                <div className="ribbon">
                  <span class="ribbon3">{product.category}</span>
                </div>
                <div className="card-content">
                  <div className="Product-content">
                    <div className="product_pic">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <div className="product_info">
                      <span className="product_title">
                        <h4>{product.title}</h4>
                      </span>
                      {/* <span className='product_des' >
                                    <p> {product.description} </p>
                                    </span> */}

                      <div className="product_details">
                        <div class="rate">
                          <input
                            type="radio"
                            id="star5"
                            name="rate"
                            value="5"
                          />
                          <label for="star5" title="text">
                            5 stars
                          </label>
                          <input
                            type="radio"
                            id="star4"
                            name="rate"
                            value="4"
                          />
                          <label for="star4" title="text">
                            4 stars
                          </label>
                          <input
                            type="radio"
                            id="star3"
                            name="rate"
                            value="3"
                          />
                          <label for="star3" title="text">
                            3 stars
                          </label>
                          <input
                            type="radio"
                            id="star2"
                            name="rate"
                            value="2"
                          />
                          <label for="star2" title="text">
                            2 stars
                          </label>
                          <input
                            type="radio"
                            id="star1"
                            name="rate"
                            value="1"
                          />
                          <label for="star1" title="text">
                            1 star
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product_price">
                    <i class="far fa-dollar-sign"></i> {product.price}
                  </div>
                  <div className="product_actions">
                    <Link to={`/webhub/product/${product.id}`}>
                      <button className="action-btn glass">
                        <span>View More </span>
                        <div className="btn-effect"></div>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="card-shine"></div>
                <div className="card-border"></div>
                <div className="card-glow"></div>
              </div>
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

export default Webproduct;