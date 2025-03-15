const BASE_URL = import.meta.env.VITE_API_URL; // Load from environment

// Blog API Endpoints
export const BLOG_API = {
  GET_ALL_BLOGS: `${BASE_URL}/blogs`,
  CREATE_BLOG: `${BASE_URL}/blogs`,
};

// Dynamic Endpoints
export const getBlogById = (id) => `${BASE_URL}/blogs/${id}`;
export const updateBlogById = (id) => `${BASE_URL}/blogs/${id}`;
export const deleteBlogById = (id) => `${BASE_URL}/blogs/${id}`;
export const getBlogsByUser = (authorId) =>
  `${BASE_URL}/blogs/author/${authorId}`; // ✅ Corrected

// Authentication API Endpoints
export const AUTH_API = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  GET_PROFILE: (userId) => `${BASE_URL}/auth/${userId}`, // ✅ Corrected
};
