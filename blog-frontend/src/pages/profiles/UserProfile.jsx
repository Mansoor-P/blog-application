import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.username !== username) {
    return <p className="text-red-500 text-center mt-5">Unauthorized Access</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user.fullName}!</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default UserProfile;
