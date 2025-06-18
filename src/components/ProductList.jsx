import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const url = `https://kisaankendra.in/wp-json/wc/v3/products?category=${categoryId}&per_page=100&consumer_key=ck_e9a784047c98ebb02ce6b751f9418beaa3039c45&consumer_secret=cs_03c1a1491551deda4e6729a306b036192c99b3db`;

      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderSkeletonCard = (_, index) => (
    <div key={index} className="col-xl-3 col-lg-4 col-md-6" style={{ marginBottom: "30px" }}>
      <div
        className="product-style1 fixed-card"
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          padding: "10px",
          backgroundColor: "#fff",
          animation: "pulse 1.5s infinite ease-in-out"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#f0f0f0",
            borderRadius: "6px",
            marginBottom: "12px",
          }}
        ></div>

        <div style={{ padding: "0 8px" }}>
          <div
            style={{
              width: "40%",
              height: "14px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          ></div>
          <div
            style={{
              width: "80%",
              height: "16px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          ></div>
          <div
            style={{
              width: "60%",
              height: "12px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="products space">
      <style>{`
        @keyframes pulse {
          0% {
            background-color: #f0f0f0;
          }
          50% {
            background-color: #e0e0e0;
          }
          100% {
            background-color: #f0f0f0;
          }
        }
      `}</style>

      <div className="container-fluid">
        <div className="vs-sort-bar">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-auto">
              {!isLoading && (
                <p className="woocommerce-result-count">
                  Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, products.length)} of {products.length} results
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="row">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => renderSkeletonCard(_, index))
            : currentProducts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 20px", color: "#555" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                  alt="No Products"
                  style={{ width: "100px", marginBottom: "20px", opacity: 0.8 }}
                />
                <h3 style={{ marginBottom: "10px", fontWeight: "500" }}>No Products Found</h3>
                <p style={{ fontSize: "14px", color: "#888" }}>
                  This category currently has no products.
                </p>
              </div>
            ) : (
              currentProducts.map((product) => (
                <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
                  <Link to={`/product-details/${product.id}`}>
                    <div className="product-style1 fixed-card">
                      <div className="product-img">
                        <img src={product.images[0]?.src} alt={product.name} />
                      </div>
                      <div className="product-about">
                        <p className="text">{product.categories[0]?.name}</p>
                        <h2 className="product-title">
                          <Link to={`/product-details/${product.id}`}>
                            {product.name.split(" ").slice(0, 8).join(" ")}{product.name.split(" ").length > 10 ? "..." : ""}
                          </Link>
                        </h2>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </div>
                        <div className="social-style" style={{ width: "100%" }}>
                        <ul>
                          <li>
                            <a className="main-icon" href="tel:+9191092626365">
                              <i className="fas fa-phone"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      </div>
                      
                    </div>
                  </Link>
                </div>
              ))
            )}
        </div>

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <div className="vs-pagination text-center mb-0 mt-4">
            <ul className="pagination-list d-flex justify-content-center gap-2">
              <li className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}>
                <button onClick={() => handlePageClick(currentPage - 1)}>
                  <i className="fal fa-long-arrow-left"></i>
                </button>
              </li>

              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageClick(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button onClick={() => handlePageClick(currentPage + 1)}>
                  <i className="fal fa-long-arrow-right"></i>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
