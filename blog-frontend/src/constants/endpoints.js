const BASE_URL = import.meta.env.VITE_API_URL; // Load from environment

// Blog API Endpoints
export const BLOG_API = {
  GET_ALL_BLOGS: `${BASE_URL}/blogs`,
  CREATE_BLOG: `${BASE_URL}/blogs`,
};

// Dynamic Endpoints as Functions
export const getBlogById = (id) => `${BASE_URL}/blogs/${id}`;
export const updateBlog = (id) => `${BASE_URL}/blogs/${id}`;
export const deleteBlog = (id) => `${BASE_URL}/blogs/${id}`;
export const getBlogsByUser = (userId) => `${BASE_URL}/blogs/user/${userId}`;

// Authentication API Endpoints
export const AUTH_API = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  GET_PROFILE: `${BASE_URL}/auth/profile`,
};
