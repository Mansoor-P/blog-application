import axios from "axios";

const API_URL = "http://localhost:8080/api/blogs";

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching blogs");
  }
};
