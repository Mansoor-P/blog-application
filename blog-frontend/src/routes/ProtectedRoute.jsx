import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.userId) {
    console.error("No user ID found. Redirecting to login.");
    return <Navigate to="/login" replace />;
  }

  // ✅ Redirect if user has the wrong role
  if (role && user.role !== role) {
    console.warn(`Unauthorized role: ${user.role}`);
    return <Navigate to="/" replace />;
  }

  // ✅ Ensure children receive user info if needed
  return React.cloneElement(children, { user });
};

export default ProtectedRoute;
