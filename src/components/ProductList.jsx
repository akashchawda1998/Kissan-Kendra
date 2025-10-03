// ProductListModern.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const PLACEHOLDER_IMG = "https://via.placeholder.com/800x600?text=No+Image";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/**
 * Build a compact pagination (with ellipses)
 * returns an array of items:
 * - number -> page
 * - "..." -> ellipsis
 */
function buildPageList(current, total, delta = 2) {
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

const ProductListModern = () => {
  const [searchParams] = useSearchParams();

  const getParam = (key) => {
    const v = searchParams.get(key);
    if (!v) return null;
    const trimmed = v.trim();
    return trimmed.length ? trimmed : null;
  };

  const categoryId = getParam("category");
  const subcategoryId = getParam("subcategory");

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12); // items per page
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // Keep currentPage reset when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, subcategoryId]);

  // fetch products (assumes backend supports page & limit & filter query params)
  useEffect(() => {
    let cancelled = false;
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (categoryId) params.append("category", categoryId);
        if (subcategoryId) params.append("subcategory", subcategoryId);
        params.append("page", String(currentPage));
        params.append("limit", String(pageSize));

        const url = `https://admin.kisaankendra.in/api/product/get-all-products?${params.toString()}`;

        const response = await axios.get(url, {
          headers: {
            // keep this dynamic in real app
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQyZTc2YTU0NmI1MDdjMTFmYjYyOTMiLCJpYXQiOjE3NTk0Njc2MTYsImV4cCI6MTc2MDc2MzYxNn0.srEUbGPhbdYnlr_eGK1c2ApfzXh7j0BmHyqaA95i3Iw",
          },
        });

        if (cancelled) return;

        const data = response?.data?.data || {};
        const fetchedProducts = data?.products || [];
        const pagination = data?.pagination || {};

        setProducts(fetchedProducts);

        // If backend sends pagination info use it; otherwise estimate
        const tp =
          typeof pagination.totalPages === "number"
            ? pagination.totalPages
            : Math.max(1, Math.ceil((pagination.total || fetchedProducts.length) / pageSize));
        setTotalPages(tp);

        const total = typeof pagination.total === "number" ? pagination.total : fetchedProducts.length;
        setTotalItems(total);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
        setTotalPages(1);
        setTotalItems(0);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, [categoryId, subcategoryId, currentPage, pageSize]);

  // derived data for rendering (if backend already paginates, use products as-is)
  const displayedProducts = useMemo(() => products || [], [products]);

  const handlePageClick = (page) => {
    const p = clamp(page, 1, totalPages);
    if (p === currentPage) return;
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value) || 12;
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const pageList = useMemo(() => buildPageList(currentPage, totalPages, 2), [currentPage, totalPages]);

  return (
    <section className="product-list-modern">
      <style>{`
        .product-list-modern { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color: #222; padding: 28px 16px; }
        .pl-container { max-width: 1200px; margin: 0 auto; }
        .pl-header { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; flex-wrap:wrap; }
        .pl-filters { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
        .pl-count { color:#555; font-size:14px; }
        .pl-grid { display:grid; gap:18px; grid-template-columns: repeat(1, minmax(0,1fr)); }
        @media(min-width:600px){ .pl-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media(min-width:900px){ .pl-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
        @media(min-width:1200px){ .pl-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } }

        .card { background:#fff; border-radius:10px; overflow:hidden; box-shadow: 0 6px 18px rgba(18,38,63,0.06); border: 1px solid rgba(16,24,40,0.04); display:flex; flex-direction:column; min-height:100%; transition: transform .18s ease, box-shadow .18s ease; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(18,38,63,0.08); }
        .card-media { position:relative; padding-top:100%; overflow:hidden; background:#f7f7f8; }
        .card-media img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; }
        .card-body { padding:14px; display:flex; flex-direction:column; gap:8px; flex:1; }
        .card-cat { color:#6b7280; font-size:13px; }
        .card-title { font-size:15px; font-weight:600; line-height:1.15; color:#0f172a; text-decoration:none; }
        .card-meta { margin-top:auto; display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .price { font-weight:700; font-size:16px; color:#0b6b4a; }
        .rating i { color: #f59e0b; margin-right:2px; }

        /* pagination */
        .pl-pagination { display:flex; align-items:center; justify-content:center; gap:8px; margin-top:22px; flex-wrap:wrap; }
        .pl-page-btn { min-width:40px; height:40px; border-radius:8px; border:1px solid rgba(16,24,40,0.06); background:#fff; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; padding:0 10px; font-weight:600; }
        .pl-page-btn[aria-current="true"] { background: linear-gradient(180deg,#0ea5a2,#0b9484); color:#fff; border:none; box-shadow:0 8px 18px rgba(11,148,132,0.12); }
        .pl-page-btn:disabled, .pl-page-btn.disabled { opacity:0.5; cursor:not-allowed; }
        .ellipsis { display:inline-flex; align-items:center; justify-content:center; min-width:36px; color:#6b7280; }

        /* skeleton */
        .skeleton { animation: pulse 1.4s infinite; border-radius:8px; background:linear-gradient(90deg,#f3f4f6,#ececec,#f3f4f6); background-size:200% 100%; }
        @keyframes pulse { 0%{ background-position:200% 0 } 100%{ background-position:-200% 0 } }

        .empty-state { text-align:center; padding:48px 12px; color:#6b7280; }
        .small { font-size:13px; color:#6b7280 }
        .controls { display:flex; gap:8px; align-items:center; }
        .select { border:1px solid rgba(16,24,40,0.06); padding:8px 10px; border-radius:8px; background:#fff; }
      `}</style>

      <div className="pl-container">
        <div className="pl-header">
          <div>
            <h2 style={{ margin: 0, fontSize: 20 }}>Products</h2>
            <div className="small" style={{ marginTop: 6 }}>
              {categoryId || subcategoryId ? (
                <>
                  Showing results for{" "}
                  {categoryId && <strong>Category: {categoryId}</strong>}
                  {categoryId && subcategoryId && " • "}
                  {subcategoryId && <strong>Subcategory: {subcategoryId}</strong>}
                </>
              ) : (
                <span>All categories</span>
              )}
            </div>
          </div>

          <div className="pl-filters">
            <div className="pl-count">
              {!isLoading ? (
                <span>
                  Showing <strong>{Math.min((currentPage - 1) * pageSize + 1, totalItems || 0)}</strong>–{" "}
                  <strong>{Math.min(currentPage * pageSize, totalItems || 0)}</strong> of{" "}
                  <strong>{totalItems}</strong>
                </span>
              ) : (
                <span>Loading results…</span>
              )}
            </div>

            <div className="controls" aria-hidden={isLoading}>
              <label style={{ fontSize: 13, color: "#374151" }}>Per page</label>
              <select
                className="select"
                value={pageSize}
                onChange={handlePageSizeChange}
                style={{ minWidth: 84 }}
              >
                {[8, 12, 24, 48].map((ps) => (
                  <option key={ps} value={ps}>
                    {ps}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="pl-grid" role="list">
          {isLoading
            ? // show 8 skeleton cards
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="card skeleton" style={{ padding: 12, minHeight: 260 }} role="listitem" aria-hidden>
                  <div style={{ height: 160, borderRadius: 8, marginBottom: 12 }} className="skeleton" />
                  <div style={{ height: 14, width: "60%", marginBottom: 8 }} className="skeleton" />
                  <div style={{ height: 16, width: "100%", marginBottom: 8 }} className="skeleton" />
                  <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                    <div style={{ height: 36, width: 90 }} className="skeleton" />
                    <div style={{ height: 36, width: 60 }} className="skeleton" />
                  </div>
                </div>
              ))
            : displayedProducts.length === 0 ? (
              <div style={{ gridColumn: "1 / -1" }}>
                <div className="empty-state">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                    alt="No products"
                    style={{ width: 92, opacity: 0.85, marginBottom: 14 }}
                  />
                  <h3 style={{ margin: "8px 0", fontWeight: 600 }}>No products found</h3>
                  <p style={{ margin: 0, maxWidth: 560 }}>
                    We couldn't find products matching your filters. Try changing the category or page size.
                  </p>
                </div>
              </div>
            ) : (
              displayedProducts.map((product) => (
                <article key={product._id || product.id} className="card" role="listitem">
                  <Link
                    to={`/product-details/${product._id || product.id}`}
                    style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
                    aria-label={`Open ${product.title || "product"}`}
                  >
                    <div className="card-media" aria-hidden>
                      <img
                        src={(product.imageUrl && product.imageUrl.length && product.imageUrl[0]) || product.image || PLACEHOLDER_IMG}
                        alt={product.title || "Product image"}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = PLACEHOLDER_IMG;
                        }}
                      />
                    </div>

                    <div className="card-body">
                      <div className="card-cat">{product.subcategory || product.category || "—"}</div>
                      <div className="card-title">
                        {product.title && product.title.length > 65 ? product.title.slice(0, 65) + "…" : product.title}
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                        <div className="rating" aria-hidden>
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star" style={{ fontSize: 12 }}></i>
                          ))}
                        </div>
                        <div style={{ fontSize: 13, color: "#6b7280" }}>{product.brand || ""}</div>
                      </div>

                      <div className="card-meta" style={{ marginTop: 10 }}>
                        <div className="price">
                          {product.price != null ? `₹${Number(product.price).toLocaleString("en-IN")}` : "—"}
                        </div>
                        <div style={{ fontSize: 13, color: "#6b7280" }}>
                          {product.unit || product.uom || ""}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            )}
        </div>

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <nav className="pl-pagination" aria-label="Product list pagination">
            <button
              className="pl-page-btn"
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ‹
            </button>

            {pageList.map((p, idx) =>
              p === "..." ? (
                <span key={`e-${idx}`} className="ellipsis" aria-hidden>
                  …
                </span>
              ) : (
                <button
                  key={p}
                  className="pl-page-btn"
                  onClick={() => handlePageClick(p)}
                  aria-current={p === currentPage ? "true" : undefined}
                  aria-label={p === currentPage ? `Page ${p}, current page` : `Go to page ${p}`}
                >
                  {p}
                </button>
              )
            )}

            <button
              className="pl-page-btn"
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              ›
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default ProductListModern;
