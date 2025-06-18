import apiClient from "../api/ApiClient"; // Ensure this has baseURL & auth config

export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  WooCommerce: {
    // 🔹 Get products by category ID
    GetProductsByCategory: (categoryId) => ({
      Endpoint: `/products?category=${categoryId}`,
      Method: HttpMethod.Get,
    }),

    // 🔹 Get all product categories
    GetAllCategories: {
      Endpoint: "/products/categories",
      Method: HttpMethod.Get,
    },

    // 🔹 Get only parent categories (for top-level navigation)
    GetParentCategories: {
      Endpoint: "/products/categories?parent=0&per_page=100",
      Method: HttpMethod.Get,
    },

    // 🔹 Get subcategories by parent category ID
    GetSubcategories: (parentId) => ({
      Endpoint: `/products/categories?parent=${parentId}`,
      Method: HttpMethod.Get,
    }),
  },
};

export default ApiRoutes;
