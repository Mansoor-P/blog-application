import axios from "axios";
import {
  BLOG_API,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  getBlogsByUser,
} from "../constants/endpoints";

// Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Function to handle errors
const handleApiError = (error, message) => {
  if (error.response) {
    console.error(`${message}:`, error.response.data);
    throw new Error(error.response.data.message || message);
  } else if (error.request) {
    console.error(`${message}: No response received`, error.request);
    throw new Error(`${message}, no response received`);
  } else {
    console.error(`${message}: Unexpected error`, error.message);
    throw new Error(`${message}, please try again`);
  }
};

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const response = await api.get(BLOG_API.GET_ALL_BLOGS);
    console.log("Fetched Blogs:", response.data); // ✅ Debugging
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch blogs");
  }
};

// Fetch a blog by ID
export const fetchBlogById = async (id) => {
  try {
    const response = await api.get(getBlogById(id));
    return response.data;
  } catch (error) {
    handleApiError(error, "Error fetching blog by ID");
  }
};

// Create a new blog
export const createBlog = async (blogData) => {
  try {
    const response = await api.post(BLOG_API.CREATE_BLOG, blogData);
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to create blog");
  }
};

// Update a blog by ID
export const updateBlog = async (id, blogData) => {
  try {
    const response = await api.put(updateBlogById(id), blogData);
    return response.data;
  } catch (error) {
    handleApiError(error, "Error updating blog");
  }
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  try {
    await api.delete(deleteBlogById(id));
    return { message: "Blog deleted successfully" };
  } catch (error) {
    handleApiError(error, "Error deleting blog");
  }
};

// Fetch blogs by User ID
export const fetchUserBlogs = async (authorId) => {
  try {
    const response = await api.get(`/user/${authorId}/my-blogs`); // ✅ Directly use the endpoint
    return response.data;
  } catch (error) {
    handleApiError(error, "Error fetching blogs by user");
  }
};


// Ensure this function exists in blogService.js
export const fetchBlogsByUser = async (username) => {
  try {
    const response = await api.get(`/user/${username}/my-blogs`); // ✅ Ensure correct endpoint
    return response.data;
  } catch (error) {
    handleApiError(error, "Error fetching blogs by user");
  }
};
