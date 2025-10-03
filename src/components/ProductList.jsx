import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category") || "Tractors";
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const url = `https://admin.kisaankendra.in/api/product/category/get-all-categories`;

      try {
        const response = await axios.get(url);
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
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
          0% { background-color: #f0f0f0; }
          50% { background-color: #e0e0e0; }
          100% { background-color: #f0f0f0; }
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

        <div className="row">
          {isLoading
            ? Array.from({ length: 8 }).map(renderSkeletonCard)
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
                <div key={product._id} className="col-xl-3 col-lg-3 col-md-6">
                  <Link to={`/product-details/${product._id}`}>
                    <div className="product-style1 fixed-card">
                      <div className="product-img">
                        <img
                          src={`https://api.kisaankendra.in${product.imageUrl}`}
                          alt={product.title}
                        />
                      </div>
                      <div className="product-about">
                        <p className="text">{product.subcategory}</p>
                        <h2 className="product-title">
                          <Link to={`/product-details/${product._id}`}>
                            {product.title.length > 50
                              ? product.title.slice(0, 50) + "..."
                              : product.title}
                          </Link>
                        </h2>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </div>
                        <div className="price">
                          ₹{Number(product.price).toLocaleString("en-IN")}
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
