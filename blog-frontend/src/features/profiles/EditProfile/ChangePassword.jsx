import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/FormInput";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await fetch("/api/user/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password changed successfully!");
        navigate(`/user/${JSON.parse(localStorage.getItem("user")).username}`);
      } else {
        setError(data.message || "Error changing password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Change Password
      </h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handlePasswordChange}>
        <FormInput
          label="Old Password"
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <FormInput
          label="New Password"
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <FormInput
          label="Confirm New Password"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Enter Confirm password (optional)"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
