const BASE_URL = import.meta.env.VITE_API_URL; // Base API URL from .env

export const BLOG_API = {
  GET_ALL_BLOGS: `${BASE_URL}/blogs`,
  GET_BLOG_BY_ID: (id) => `${BASE_URL}/blogs/${id}`,
  CREATE_BLOG: `${BASE_URL}/blogs`,
  UPDATE_BLOG: (id) => `${BASE_URL}/blogs/${id}`,
  DELETE_BLOG: (id) => `${BASE_URL}/blogs/${id}`,
  GET_BLOGS_BY_USER: (userId) => `${BASE_URL}/blogs/user/${userId}`,
};

export const AUTH_API = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  GET_PROFILE: `${BASE_URL}/auth/profile`,
};
