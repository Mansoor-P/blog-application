import axios from "axios";
import { AUTH_API } from "../constants/endpoints";

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(AUTH_API.REGISTER, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(AUTH_API.LOGIN, credentials);

    if (response.data && response.data.userId) {
      localStorage.setItem("user", JSON.stringify(response.data)); // ✅ Ensure user role is saved
      return response.data;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Get User Profile
export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(AUTH_API.GET_PROFILE(userId));
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch user profile"
    );
  }
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("user");
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

// Get the logged-in user details from localStorage
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
