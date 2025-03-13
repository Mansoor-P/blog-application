import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const navigate = useNavigate();

  let user;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error("Invalid user data:", error);
  }

  useEffect(() => {
    if (!user || user.role !== "ADMIN") {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-lg font-medium">
          Email: <span className="text-gray-700">{user.email}</span>
        </p>
        <p className="text-lg font-medium">
          Role: <span className="text-gray-700">{user.role}</span>
        </p>
      </div>
    </div>
  );
};

export default AdminProfile;
