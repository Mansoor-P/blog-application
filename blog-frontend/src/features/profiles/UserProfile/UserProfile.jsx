import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { User, LogOut, Edit, PlusCircle, Shield } from "lucide-react";

const ProfileActionButton = ({ to, icon: Icon, color, children }) => (
  <Link
    to={to}
    className={`flex items-center justify-center text-white text-lg px-6 py-3 rounded-xl shadow-md transition duration-300 ${color}`}
  >
    <Icon className="mr-2" size={20} />
    {children}
  </Link>
);

const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-indigo-500 text-xl font-semibold animate-pulse">
          Loading profile...
        </p>
      </div>
    );
  }

  if (user.username !== username) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg font-semibold">
          Unauthorized Access
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 max-w-5xl mx-auto p-8 rounded-xl shadow-xl bg-white/40 backdrop-blur-lg border border-gray-200">
      {/* 🔹 Profile Header */}
      <div className="flex flex-col sm:flex-row items-center space-x-6 mb-8">
        {/* Profile Picture */}
        <div className="relative w-28 h-28 rounded-full border-4 border-indigo-500 shadow-md overflow-visible">
          {user.profilePictureUrl ? (
            <img
              src={user.profilePictureUrl}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="flex items-center justify-center h-full w-full text-2xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600">
              {user.displayName ? user.displayName[0] : user.username[0]}
            </span>
          )}
          {/* Account Status Badge */}
          <span className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1 px-2 py-0.5 text-xs font-semibold text-white rounded-full bg-blue-600 border-2 border-white shadow">
            {user.accountStatus}
          </span>
        </div>

        {/* User Details */}
        <div className="mt-4 sm:mt-0">
          <h2 className="text-4xl font-bold text-gray-800">
            {user.displayName || user.username}
          </h2>
          <p className="text-lg text-gray-600">{user.email}</p>

          {/* Role Display */}
          <p className="text-md text-gray-500 flex items-center gap-2">
            {user.role === "ADMIN" && (
              <Shield className="text-blue-600" size={16} />
            )}
            Role: {user.role || "User"}
          </p>

          {/* Social Links */}
          {user.socialLinks && (
            <div className="mt-3">
              <h3 className="text-md font-semibold text-gray-700">
                Social Links:
              </h3>
              <div className="flex gap-4 mt-2">
                {user.socialLinks &&
                  typeof user.socialLinks === "object" &&
                  Object.entries(user.socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 transition"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Follow Stats */}
      <div className="flex justify-center space-x-10 text-center mb-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-2xl font-semibold">{user.followersCount}</p>
          <p className="text-gray-600">Followers</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-2xl font-semibold">{user.followingCount}</p>
          <p className="text-gray-600">Following</p>
        </div>
      </div>

      {/* 🔹 About Section */}
      <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">About</h3>
        <p className="text-gray-600 mt-2">
          {user.bio ? user.bio : "This user has not added a bio yet."}
        </p>
      </div>

      {/* 🔹 Actions */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Actions
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProfileActionButton
          to={`/user/${user.username}/post-blog`}
          icon={PlusCircle}
          color="bg-indigo-600 hover:bg-indigo-700"
        >
          Post a Blog
        </ProfileActionButton>
        <ProfileActionButton
          to={`/user/${user.username}/my-blogs`}
          icon={User}
          color="bg-green-600 hover:bg-green-700"
        >
          View Your Blogs
        </ProfileActionButton>
        <ProfileActionButton
          to={`/user/${user.username}/edit-profile`}
          icon={Edit}
          color="bg-yellow-600 hover:bg-yellow-700"
        >
          Edit Profile
        </ProfileActionButton>
        <ProfileActionButton
          to={`/user/${user.username}/change-password`}
          icon={Edit}
          color="bg-yellow-600 hover:bg-yellow-700"
        >
          Change Password
        </ProfileActionButton>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="flex items-center justify-center bg-red-600 text-white text-lg px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition duration-300"
        >
          <LogOut className="mr-2" size={20} />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
