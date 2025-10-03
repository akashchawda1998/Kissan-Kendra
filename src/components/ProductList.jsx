import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PLACEHOLDER_IMG = 'https://via.placeholder.com/400x300?text=No+Image';

const ProductList = () => {
  const [searchParams] = useSearchParams();

  // helper: treat empty string or whitespace as null
  const getParam = (key) => {
    const v = searchParams.get(key);
    if (!v) return null;
    const trimmed = v.trim();
    return trimmed.length ? trimmed : null;
  };

  const categoryId = getParam('category') || null; // null => don't include param
  const subcategoryId = getParam('subcategory') || null;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // total items from pagination if provided

  const productsPerPage = 10;

  // Reset to first page when category/subcategory change
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, subcategoryId]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      // build query params conditionally
      const params = new URLSearchParams();
      if (categoryId) params.append('category', categoryId);
      if (subcategoryId) params.append('subcategory', subcategoryId);
      params.append('page', String(currentPage));
      params.append('limit', String(productsPerPage));

      const url = `https://admin.kisaankendra.in/api/product/get-all-products?${params.toString()}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQyZTc2YTU0NmI1MDdjMTFmYjYyOTMiLCJpYXQiOjE3NTk0Njc2MTYsImV4cCI6MTc2MDc2MzYxNn0.srEUbGPhbdYnlr_eGK1c2ApfzXh7j0BmHyqaA95i3Iw',
          },
        });

        const data = response?.data?.data;
        const fetchedProducts = data?.products || [];
        const pagination = data?.pagination || {};

        setProducts(fetchedProducts);

        // set total pages and total items from pagination if provided, else fallback
        const tp =
          typeof pagination.totalPages === 'number'
            ? pagination.totalPages
            : Math.max(1, Math.ceil((pagination.total || fetchedProducts.length) / productsPerPage));
        setTotalPages(tp);

        const total = typeof pagination.total === 'number' ? pagination.total : fetchedProducts.length;
        setTotalItems(total);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setTotalPages(1);
        setTotalItems(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, subcategoryId, currentPage]); // rerun when category, subcategory or page changes

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(0, productsPerPage); // backend pagination assumed

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderSkeletonCard = (_, index) => (
    <div key={index} className="col-xl-3 col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
      <div
        className="product-style1 fixed-card"
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          padding: '10px',
          backgroundColor: '#fff',
          animation: 'pulse 1.5s infinite ease-in-out',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#f0f0f0',
            borderRadius: '6px',
            marginBottom: '12px',
          }}
        ></div>
        <div style={{ padding: '0 8px' }}>
          <div style={{ width: '40%', height: '14px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '10px' }}></div>
          <div style={{ width: '80%', height: '16px', backgroundColor: '#e0e0e0', borderRadius: '4px', marginBottom: '8px' }}></div>
          <div style={{ width: '60%', height: '12px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}></div>
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
                  Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, totalItems)} of {totalItems} results
                </p>
              )}
            </div>
            <div className="col-md-auto">
              {/* show active filters */}
              {(categoryId || subcategoryId) && (
                <div style={{ fontSize: 14, color: '#333' }}>
                  Filters:
                  {categoryId && <span style={{ marginLeft: 8 }}>Category: <strong>{categoryId}</strong></span>}
                  {subcategoryId && <span style={{ marginLeft: 8 }}>Subcategory: <strong>{subcategoryId}</strong></span>}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          {isLoading
            ? Array.from({ length: 8 }).map(renderSkeletonCard)
            : currentProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#555' }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                  alt="No Products"
                  style={{ width: '100px', marginBottom: '20px', opacity: 0.8 }}
                />
                <h3 style={{ marginBottom: '10px', fontWeight: '500' }}>No Products Found</h3>
                <p style={{ fontSize: '14px', color: '#888' }}>
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
                          src={product?.imageUrl && product.imageUrl.length ? product.imageUrl[0] : PLACEHOLDER_IMG}
                          alt={product.title}
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="product-about">
                        <p className="text">{product.subcategory}</p>
                        <h2 className="product-title">
                          <Link to={`/product-details/${product._id}`}>
                            {product.title && product.title.length > 50
                              ? product.title.slice(0, 50) + '...'
                              : product.title}
                          </Link>
                        </h2>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                          ))}
                        </div>
                        <div className="price">
                          ₹{Number(product.price).toLocaleString('en-IN')}
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
