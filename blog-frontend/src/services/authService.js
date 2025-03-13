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
    console.log("Full Login Response:", response);

    console.log("Login Response Data:", response.data);

    if (response.data && response.data.id) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } else {
      console.error("Unexpected Response Format:", response.data);
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
