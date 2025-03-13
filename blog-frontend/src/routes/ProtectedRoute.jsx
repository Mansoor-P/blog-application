import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.id) {
    console.error("No user ID found. Please log in.");
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // ✅ Pass user object if child is a function
  return typeof children === "function" ? children(user) : children;
};

export default ProtectedRoute;
