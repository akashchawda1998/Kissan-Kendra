import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://kisaankendra.in/wp-json/wc/v3/products/categories?parent=0&per_page=100&consumer_key=ck_e9a784047c98ebb02ce6b751f9418beaa3039c45&consumer_secret=cs_03c1a1491551deda4e6729a306b036192c99b3db';

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching categories:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Product Categories</h2>
      <div className="row">
        {categories.map(category => (
          <div className="col-md-3 col-sm-6 mb-4" key={category.id}>
            <div className="card h-100 text-center">
              {category.image ? (
                <img
                  src={category.image.src}
                  alt={category.name}
                  className="card-img-top p-3"
                  style={{ height: '180px', objectFit: 'contain' }}
                />
              ) : (
                <div
                  style={{ height: '180px', backgroundColor: '#eee' }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <span>No Image</span>
                </div>
              )}

              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text text-muted">
                  {category.description || 'No description available'}
                </p>

                <ul className="list-unstyled text-start px-3">
                  <li><strong>ID:</strong> {category.id}</li>
                  <li><strong>Slug:</strong> {category.slug}</li>
                  <li><strong>Products Count:</strong> {category.count}</li>
                  <li><strong>Menu Order:</strong> {category.menu_order}</li>
                  <li><strong>Display Type:</strong> {category.display}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent;
