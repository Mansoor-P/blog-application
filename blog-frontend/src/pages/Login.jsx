import React, { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "../components/FormInput";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    try {
      const userData = await loginUser(credentials);
      if (userData) {
        navigate(userData.role === "ADMIN" ? "/admin" : `/user/${userData.username}`);
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            If you haven't registered yet?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
