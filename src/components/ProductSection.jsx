import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Modern single-file Product Detail component (TailwindCSS)
// - Expects API returning the JSON you pasted (message/status/code/data)
// - Uses Authorization Bearer token (hardcoded per your request)
// - Dynamic: images, specs, download file, created/updated dates, etc.

export default function ProductDetailModern() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        // Use id from route if provided, otherwise keep as empty and API may return default
        const productId = id || "68d7bc010becd3a651878b49";
        const url = `https://admin.kisaankendra.in//api/product/get-product/${productId}`; // change if your endpoint differs

        const token =
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQyZTc2YTU0NmI1MDdjMTFmYjYyOTMiLCJpYXQiOjE3NTk0Njc2MTYsImV4cCI6MTc2MDc2MzYxNn0.srEUbGPhbdYnlr_eGK1c2ApfzXh7j0BmHyqaA95i3Iw";

        const res = await axios.get(url, { headers: { Authorization: token } });
        const d = res?.data?.data ?? res?.data ?? null; // adapt to wrapper
        if (!cancelled) {
          setProduct(d);
          setSelectedImage(0);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("Failed to load product");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="h-96 bg-gray-200 rounded-lg" />
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-gray-200 rounded" />
              <div className="w-20 h-20 bg-gray-200 rounded" />
              <div className="w-20 h-20 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-8 w-1/3 bg-gray-200 rounded" />
            <div className="h-6 w-2/3 bg-gray-200 rounded" />
            <div className="h-6 w-1/4 bg-gray-200 rounded" />
            <div className="h-10 w-44 bg-gray-200 rounded" />
            <div className="h-40 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-800">{error || "Product not found"}</p>
        </div>
      </div>
    );
  }

  // Map fields from your response shape
  const idVal = product._id || product.id || "";
  const title = product.title || product.name || "Untitled Product";
  const description = product.description || "";
  const price = product.price ?? product.salePrice ?? 0;
  const category = product.category || "";
  const subcategory = product.subcategory || "";
  const images = Array.isArray(product.imageUrl) ? product.imageUrl : product.imageUrl ? [product.imageUrl] : [];
  const specs = Array.isArray(product.specification) ? product.specification : [];
  const file = product.file || null;
  const createdAt = product.createdAt ? new Date(product.createdAt) : null;
  const updatedAt = product.updatedAt ? new Date(product.updatedAt) : null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: gallery */}
        <div>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="h-96 flex items-center justify-center bg-gray-50">
              <img
                src={images[selectedImage] || "https://via.placeholder.com/800x600?text=No+Image"}
                alt={title}
                className="max-h-[360px] object-contain"
              />
            </div>
            <div className="p-4 flex gap-3 overflow-x-auto">
              {images.length ? (
                images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`flex-none rounded-lg overflow-hidden border transition-shadow duration-150 ${
                      selectedImage === i ? "ring-2 ring-green-400" : "hover:shadow"
                    }`}
                  >
                    <img src={src} alt={`${title}-thumb-${i}`} className="w-20 h-20 object-cover" />
                  </button>
                ))
              ) : (
                <div className="text-gray-400">No images available</div>
              )}
            </div>
          </div>

          {/* File / Download */}
          {file && (
            <div className="mt-4 flex items-center gap-3">
              <a
                href={file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded shadow-sm hover:shadow-md"
              >
                📄 Download Spec
              </a>
              <span className="text-sm text-gray-500">Updated: {updatedAt ? updatedAt.toLocaleString() : "-"}</span>
            </div>
          )}
        </div>

        {/* Right: details */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <div className="mt-2 flex gap-2 items-center">
                <span className="px-2 py-1 text-xs rounded bg-green-50 text-green-700">{category}</span>
                {subcategory && <span className="px-2 py-1 text-xs rounded bg-blue-50 text-blue-700">{subcategory}</span>}
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">₹{Number(price).toLocaleString("en-IN")}</div>
              <div className="text-sm text-gray-500">Inclusive of all taxes</div>
            </div>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-5 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">🛒 Add to cart</button>
            <button className="px-4 py-3 border rounded-lg hover:shadow">🤍 Wishlist</button>
            <button
              className="px-4 py-3 border rounded-lg hover:shadow"
              onClick={() => {
                const shareData = { title, text: `${title} - ₹${price}`, url: window.location.href };
                if (navigator.share) navigator.share(shareData).catch(() => {});
              }}
            >
              🔗 Share
            </button>
          </div>

          {/* Specifications */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium">Specifications</h3>
            {specs.length ? (
              <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specs.map((s) => (
                  <div key={s._id || `${s.title}-${s.value}`} className="flex justify-between text-sm">
                    <dt className="text-gray-600">{s.title}</dt>
                    <dd className="font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-sm text-gray-500 mt-2">No specifications provided.</p>
            )}
          </div>

          {/* Meta */}
          <div className="mt-4 text-sm text-gray-500">
            <div>Product ID: <span className="font-medium text-gray-700">{idVal}</span></div>
            <div>Created: {createdAt ? createdAt.toLocaleString() : "-"}</div>
            <div>Last updated: {updatedAt ? updatedAt.toLocaleString() : "-"}</div>
          </div>
        </div>
      </div>

      {/* Bottom: description / details full */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Full Description</h2>
        <div className="prose max-w-none">{description || "No description available."}</div>
      </div>
    </div>
  );
}
