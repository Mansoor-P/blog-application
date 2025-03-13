import React from "react";
import { useParams, Link } from "react-router-dom";

const colorClasses = {
  indigo: "bg-indigo-600 hover:bg-indigo-700",
  green: "bg-green-600 hover:bg-green-700",
  yellow: "bg-yellow-600 hover:bg-yellow-700",
};

const ProfileActionButton = ({ to, color, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-white text-lg px-6 py-3 rounded-lg text-center transition duration-300 ${
      colorClasses[color] || "bg-gray-600 hover:bg-gray-700"
    }`}
  >
    {children}
  </Link>
);
const UserProfile = () => {
  const { username } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.username !== username) {
    return (
      <div className="flex justify-center items-center mt-8">
        <p className="text-red-500 text-lg">Unauthorized Access</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center space-x-6 mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-indigo-600 bg-indigo-200 flex items-center justify-center text-xl font-bold text-white">
          {user.fullName[0]}
        </div>
        <div className="mt-4 sm:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">
            {user.fullName}
          </h2>
          <p className="text-xl text-gray-600">{user.email}</p>
          <p className="text-md text-gray-500">Role: {user.role}</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">About</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Actions */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Actions
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProfileActionButton
          to={`/user/${user.username}/post-blog`}
          color="indigo"
        >
          Post a Blog
        </ProfileActionButton>
        <ProfileActionButton
          to={`/user/${user.username}/my-blogs`}
          color="green"
        >
          View Your Blogs
        </ProfileActionButton>
        <ProfileActionButton
          to={`/user/${user.username}/edit-profile`}
          color="yellow"
        >
          Edit Profile
        </ProfileActionButton>
        <ProfileActionButton
          to={`/user/${user.username}/change-password`}
          color="yellow"
        >
          Change Password
        </ProfileActionButton>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="bg-red-600 text-white text-lg px-6 py-3 rounded-lg text-center hover:bg-red-700 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
