import axios from "axios";
import { AUTH_API } from "../constants/endpoints";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(AUTH_API.REGISTER, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(AUTH_API.LOGIN, credentials);
    console.log("Login Response:", response.data);

    if (response.data && response.data.id) { // Ensure response has user details
      localStorage.setItem("user", JSON.stringify(response.data)); // Store user data
      return response.data;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Login Error:", error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};


export const logoutUser = () => {
  localStorage.removeItem("user");
};