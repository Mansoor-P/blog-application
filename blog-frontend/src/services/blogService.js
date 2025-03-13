import axios from "axios";
import { BLOG_API } from "../constants/endpoints";

// Axios instance for better request management (optional)
const api = axios.create({
  baseURL: BLOG_API.BASE_URL, // Optional if endpoints are absolute
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to handle errors more effectively
const handleApiError = (error, customMessage) => {
  if (error.response) {
    console.error(`${customMessage}:`, error.response.data);
    throw new Error(error.response.data.message || customMessage);
  } else if (error.request) {
    console.error("No response received:", error.request);
    throw new Error(`${customMessage}, no response received`);
  } else {
    console.error("Request error:", error.message);
    throw new Error(`${customMessage}, please try again`);
  }
};

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const response = await api.get(BLOG_API.GET_ALL_BLOGS);
    return response.data;
  } catch (error) {
    handleApiError(error, "Error fetching blogs");
  }
};

// Fetch blog by ID
export const fetchBlogById = async (id) => {
  try {
    const response = await api.get(BLOG_API.GET_BLOG_BY_ID(id));
    return response.data;
  } catch (error) {
    handleApiError(error, "Error fetching blog by ID");
  }
};

// Create a new blog
export const createBlog = async (blogData) => {
  try {
    console.log("API URL:", BLOG_API.CREATE_BLOG);
    console.log("Sending Data:", blogData);

    const response = await axios.post(BLOG_API.CREATE_BLOG, blogData, {
      headers: { "Content-Type": "application/json" }, // Ensure proper headers
    });

    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error Creating Blog:", error.response?.data || error);
    throw new Error(error.response?.data?.message || "Failed to create blog");
  }
};

// Update a blog
export const updateBlog = async (id, blogData) => {
  try {
    const response = await api.put(BLOG_API.UPDATE_BLOG(id), blogData);
    return response.data;
  } catch (error) {
    handleApiError(error, "Error updating blog");
  }
};

// Delete a blog
export const deleteBlog = async (id) => {
  try {
    await api.delete(BLOG_API.DELETE_BLOG(id));
    return "Blog deleted successfully";
  } catch (error) {
    handleApiError(error, "Error deleting blog");
  }
};

// Fetch blogs by user
export const fetchBlogsByUser = async (userId) => {
  try {
    const response = await api.get(BLOG_API.GET_BLOGS_BY_USER(userId));
    return response.data;
  } catch (error) {
    handleApiError(error, "Error fetching blogs by user");
  }
};
