import React from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user || user.role !== "ADMIN") {
    return <p className="text-red-500 text-center mt-5">Unauthorized Access</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default AdminProfile;
