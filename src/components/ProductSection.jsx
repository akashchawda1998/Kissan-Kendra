import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://kisaankendra.in/wp-json/wc/v3/products/${id}?consumer_key=ck_e9a784047c98ebb02ce6b751f9418beaa3039c45&consumer_secret=cs_03c1a1491551deda4e6729a306b036192c99b3db`;
      try {
        const res = await axios.get(url);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    // Skeleton Loader
    return (
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="me-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-light mb-2 rounded" style={{ width: "75px", height: "75px" }} />
                ))}
              </div>
              <div className="flex-grow-1">
                <div className="bg-light rounded" style={{ height: "400px", width: "100%" }} />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="placeholder-glow mb-3">
              <span className="placeholder col-4 bg-success"></span>
            </div>
            <div className="placeholder-glow mb-2">
              <span className="placeholder col-8"></span>
            </div>
            <div className="placeholder-glow mb-2">
              <span className="placeholder col-6 bg-success"></span>
              <span className="placeholder col-3 ms-3"></span>
            </div>
            <div className="placeholder-glow mb-4">
              <span className="placeholder col-5"></span>
            </div>
            <div className="d-flex gap-3 mb-4">
              <div className="placeholder bg-success rounded" style={{ width: "120px", height: "40px" }}></div>
              <div className="placeholder rounded-circle" style={{ width: "40px", height: "40px" }}></div>
            </div>
            <div className="placeholder-glow">
              <div className="placeholder col-6 mb-2"></div>
              <div className="placeholder col-4 mb-2"></div>
              <div className="placeholder col-8 mb-2"></div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="placeholder-glow mb-3">
            <span className="placeholder col-2 me-2"></span>
            <span className="placeholder col-2 me-2"></span>
            <span className="placeholder col-2"></span>
          </div>
          <div className="bg-light p-4 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-5">
        {/* Left: Image Section */}
        <div className="col-md-6">
          <div className="d-flex">
            <div className="me-3 d-flex flex-column">
              {product.images?.map((img, i) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.name}
                  onClick={() => setSelectedImage(i)}
                  className={`img-thumbnail mb-2 shadow-sm ${
                    selectedImage === i ? "border border-success border-2" : ""
                  }`}
                  style={{
                    width: "75px",
                    height: "75px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
            <div className="flex-grow-1 text-center">
              <img
                src={product.images[selectedImage]?.src}
                alt="Main"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="col-md-6">
          <span className={`badge ${product.stock_status === "instock" ? "bg-success" : "bg-danger"} mb-2`}>
            {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
          </span>

          <h2 className="fw-bold mb-2 mt-5">{product.name}</h2>

          <h4 className="text-success fw-semibold mb-2">
            ₹{product.price}
            {product.regular_price && (
              <span className="text-muted text-decoration-line-through fs-5 ms-2">
                ₹{product.regular_price}
              </span>
            )}
          </h4>

          <p className="text-muted mb-3">🚚 Free Shipping On This Item</p>

          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-success me-3 px-4 py-2">🛒 Add to Cart</button>
            <button className="btn btn-outline-danger rounded-circle p-2 fs-5">🤍</button>
          </div>

          <ul className="list-unstyled">
            <li><strong>SKU:</strong> {product.sku || "N/A"}</li>
            <li><strong>Categories:</strong> {product.categories.map(cat => cat.name).join(", ")}</li>
            <li><strong>Type:</strong> {product.type}</li>
            <li><strong>Status:</strong> {product.status}</li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-5">
        <ul className="nav nav-tabs border-0" id="productTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active fw-semibold"
              id="desc-tab"
              data-bs-toggle="tab"
              data-bs-target="#desc"
              type="button"
              role="tab"
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link fw-semibold"
              id="info-tab"
              data-bs-toggle="tab"
              data-bs-target="#info"
              type="button"
              role="tab"
            >
              Additional Info
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link fw-semibold"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
            >
              Reviews ({product.rating_count})
            </button>
          </li>
        </ul>
        <div className="tab-content border p-4 bg-light rounded-bottom" id="productTabContent">
          <div className="tab-pane fade show active" id="desc" role="tabpanel">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
          <div className="tab-pane fade" id="info" role="tabpanel">
            <p><strong>Product Type:</strong> {product.type}</p>
            <p><strong>Status:</strong> {product.status}</p>
          </div>
          <div className="tab-pane fade" id="reviews" role="tabpanel">
            <p>⭐ <strong>{product.average_rating}</strong> out of 5 stars</p>
            <p className="text-muted">Reviews not yet integrated.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
