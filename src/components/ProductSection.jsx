import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

/**
 * ProductDetail.jsx
 * - Uses API response shape: res.data.data (your sample JSON)
 * - Background image is loaded from public/product-bg.jpg (change path if needed)
 * - Replace the hardcoded token with your auth flow in production
 */

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const [error, setError] = useState(null);
  const mainRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const productId = id || "68d7c84a52d360024f141744"; // default fallback
        const url = `https://admin.kisaankendra.in/api/product/get-product/${productId}`;
        const token =
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQyZTc2YTU0NmI1MDdjMTFmYjYyOTMiLCJpYXQiOjE3NTk0Njc2MTYsImV4cCI6MTc2MDc2MzYxNn0.srEUbGPhbdYnlr_eGK1c2ApfzXh7j0BmHyqaA95i3Iw";

        const res = await axios.get(url, { headers: { Authorization: token } });
        const d = res?.data?.data ?? res?.data ?? null;
        if (!cancelled) {
          setProduct(d);
          setSelectedImage(0);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("Failed to fetch product.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProduct();
    return () => (cancelled = true);
  }, [id]);

  if (loading) {
    return (
      <div className="page-bg">
        <div className="pd-container pd-loading">
          <div className="pd-skeleton-left" />
          <div className="pd-skeleton-right" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (

<div className="page-bg pt-10">
      <br></br>

        <div className="pd-container pd-error">
          <div className="pd-alert">{error || "Product not found"}</div>
        </div>
      </div>
    );
  }

  // destructure product (matches your JSON)
  const {
    title,
    description,
    price,
    imageUrl = [],
    specification = [],
    file,
    category,
    subcategory,
    _id,
    updatedAt,
  } = product;

  const images = Array.isArray(imageUrl) ? imageUrl : imageUrl ? [imageUrl] : [];
  const specs = Array.isArray(specification) ? specification : [];

  const mid = Math.ceil(specs.length / 2);
  const leftSpecs = specs.slice(0, mid);
  const rightSpecs = specs.slice(mid);

  const copyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    alert("Link copied");
  };

  return (
    <div className="page-bg">
      <br></br>

      <div className="pd-container">
        {/* Breadcrumb + small actions */}
        <div className="pd-breadcrumb">
          <div className="pd-bc-left">
            <span className="bc-item">Home</span>
            <span className="bc-sep">/</span>
            <span className="bc-item">{category || "Category"}</span>
            <span className="bc-sep">/</span>
            <span className="bc-current">{title}</span>
          </div>
          <div className="pd-bc-right">
            <button className="icon-btn" title="Wishlist">🤍</button>
            <button className="icon-btn" title="Share">🔗</button>
          </div>
        </div>

        <div className="pd-grid">
          {/* Gallery */}
          <div className="pd-gallery">
            <div className="pd-thumb-rail">
              <div className="rail-arrow">▲</div>
              {images.length ? (
                images.map((src, i) => (
                  <button
                    key={i}
                    className={`thumb-btn ${selectedImage === i ? "thumb-active" : ""}`}
                    onClick={() => {
                      setSelectedImage(i);
                      mainRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <img src={src} alt={`thumb-${i}`} />
                  </button>
                ))
              ) : (
                <div className="thumb-placeholder">No images</div>
              )}
              <div className="rail-arrow">▼</div>
            </div>

            <div className="pd-main" ref={mainRef}>
              <div className="pd-main-inner">
                <img
                  src={images[selectedImage] || "https://via.placeholder.com/800x600?text=No+Image"}
                  alt="main"
                  className="pd-main-img"
                />
              </div>

             
            </div>
          </div>

          {/* Info (sticky) */}
          <div className="pd-info">
            <div className="pd-info-card">
              <h1 className="pd-title">{title}</h1>

              <div className="pd-meta">
                <div className="pd-badge">Available</div>
                <div className="pd-cat">
                  {category} {subcategory ? `• ${subcategory}` : ""}
                </div>
              </div>

              <div className="pd-price-row">
                <div className="pd-price">₹{Number(price).toLocaleString("en-IN")}</div>
                <div className="pd-emi">₹{Math.ceil(price / 4).toLocaleString("en-IN")}/mo</div>
              </div>

              <div className="pd-cta-row">
                <button className="btn-primary">🛒 Add to Cart</button>
                <button className="btn-ghost" title="Add to wishlist">🤍</button>
              </div>

              <div className="pd-file-row">
                {file && (
                  <a href={file} target="_blank" rel="noreferrer" className="btn-file">📄 Download Spec</a>
                )}
                <button className="btn-copy" onClick={copyLink}>Copy Link</button>
              </div>

              <div className="pd-keyspecs">
                <h3>Key Specifications</h3>
                <div className="pd-key-grid">
                  {specs.slice(0, 6).map((s) => (
                    <div className="pd-key" key={s._id || s.title}>
                      <div className="k-title">{s.title}</div>
                      <div className="k-val">{s.value}</div>
                    </div>
                  ))}
                </div>
                <button className="btn-view-more" onClick={() => setShowAllSpecs(v => !v)}>
                  {showAllSpecs ? "Hide specs" : "View all specs"}
                </button>
              </div>

             
            </div>
          </div>

          {/* Full width sections */}
          <div className="pd-full">
            <div className="pd-card specs-card">
              <div className="card-head">
                <h3>Specifications</h3>
                <button className="toggle" onClick={() => setShowAllSpecs(v => !v)}>{showAllSpecs ? "▲" : "▲"}</button>
              </div>

              <div className={`specs-grid ${showAllSpecs ? "expanded" : ""}`}>
                <div className="spec-col">
                  {leftSpecs.map((s) => (
                    <div className="spec-row" key={s._id}>
                      <div className="spec-title">{s.title}</div>
                      <div className="spec-value">{s.value}</div>
                    </div>
                  ))}
                </div>
                <div className="spec-col">
                  {rightSpecs.map((s) => (
                    <div className="spec-row" key={s._id}>
                      <div className="spec-title">{s.title}</div>
                      <div className="spec-value">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="center-row">
                <button className="btn-outline">View More</button>
              </div>
            </div>

            <div className="pd-card overview-card">
              <div className="card-head">
                <h3>Overview</h3>
                <button className="toggle">▲</button>
              </div>
              <div className="overview-body">
                <p>{description}</p>
                <div className="center-row">
                  <button className="btn-outline">View More</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
