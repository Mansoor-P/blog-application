import React, { useState } from "react";
import { registerUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
    role: "USER", // Default role
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      navigate("/login"); // Redirect to login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={userData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <select name="role" value={userData.role} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
