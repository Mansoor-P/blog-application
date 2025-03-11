import axios from "axios";
import { BLOG_API } from "../constants/endpoints";

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(BLOG_API.GET_ALL_BLOGS);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching blogs");
  }
};

// Fetch a single blog by ID
export const fetchBlogById = async (id) => {
  try {
    const response = await axios.get(BLOG_API.GET_BLOG_BY_ID(id));
    return response.data;
  } catch (error) {
    throw new Error("Error fetching blog by ID");
  }
};

// Create a new blog
export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(BLOG_API.CREATE_BLOG, blogData);
    return response.data;
  } catch (error) {
    throw new Error("Error creating blog");
  }
};

// Update a blog by ID
export const updateBlog = async (id, blogData) => {
  try {
    const response = await axios.put(BLOG_API.UPDATE_BLOG(id), blogData);
    return response.data;
  } catch (error) {
    throw new Error("Error updating blog");
  }
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  try {
    await axios.delete(BLOG_API.DELETE_BLOG(id));
    return "Blog deleted successfully";
  } catch (error) {
    throw new Error("Error deleting blog");
  }
};

// Get all blogs by a specific user
export const fetchBlogsByUser = async (userId) => {
  try {
    const response = await axios.get(BLOG_API.GET_BLOGS_BY_USER(userId));
    return response.data;
  } catch (error) {
    throw new Error("Error fetching blogs by user");
  }
};
