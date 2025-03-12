import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const getUser = () => {
    try {
      const userData = localStorage.getItem("user");
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  };

  const user = getUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-lg">
        Blogging
      </Link>
      <div className="space-x-4">
        <Link to="/blogs">Blogs</Link>
        {user ? (
          <>
            <Link
              to={user.role === "ADMIN" ? "/admin" : `/user/${user.username}`}
              className="text-yellow-300"
            >
              {user.fullName} ({user.role})
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
              Login
            </Link>
            <Link to="/register" className="bg-green-500 px-3 py-1 rounded">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
