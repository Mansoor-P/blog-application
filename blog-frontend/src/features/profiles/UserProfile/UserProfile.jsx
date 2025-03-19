import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { User, LogOut, Edit, PlusCircle, Shield } from "lucide-react";

const ProfileActionButton = ({ to, icon: Icon, children }) => (
  <Link
    to={to}
    className="flex items-center justify-center gap-2 text-white text-lg px-5 py-3 rounded-lg transition-all duration-300 bg-gray-900 hover:bg-gray-700"
  >
    <Icon size={20} />
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
      <div className="flex justify-center items-center h-screen text-indigo-500 text-xl font-semibold">
        Loading profile...
      </div>
    );
  }

  if (user.username !== username) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg font-semibold">
        Unauthorized Access
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-4xl mx-auto p-6 bg-white/80 rounded-xl backdrop-blur-lg border border-gray-300">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
        {/* Profile Picture */}
        <div className="relative w-28 h-28 rounded-full border-2 border-gray-700 overflow-hidden">
          {user.profilePictureUrl ? (
            <img
              src={user.profilePictureUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full text-2xl font-bold text-white bg-gray-800">
              {user.displayName ? user.displayName[0] : user.username[0]}
            </div>
          )}
          {/* Status Tag */}
          <span className="absolute bottom-0 right-0 px-2 py-0.5 text-xs font-semibold text-white bg-blue-600 rounded-md">
            {user.accountStatus}
          </span>
        </div>

        {/* User Details */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            {user.displayName || user.username}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm flex items-center gap-2 text-gray-500">
            {user.role === "ADMIN" && <Shield className="text-blue-600" size={16} />}
            {user.role || "User"}
          </p>
        </div>
      </div>

      {/* Follow Stats */}
      <div className="flex justify-center gap-8 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold">{user.followersCount}</p>
          <p className="text-gray-600 text-sm">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{user.followingCount}</p>
          <p className="text-gray-600 text-sm">Following</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800">About</h3>
        <p className="text-gray-600 mt-1">
          {user.bio ? user.bio : "This user has not added a bio yet."}
        </p>
      </div>

      {/* Actions */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProfileActionButton to={`/user/${user.username}/post-blog`} icon={PlusCircle}>
          Post a Blog
        </ProfileActionButton>
        <ProfileActionButton to={`/user/${user.username}/my-blogs`} icon={User}>
          View Your Blogs
        </ProfileActionButton>
        <ProfileActionButton to={`/user/${user.username}/edit-profile`} icon={Edit}>
          Edit Profile
        </ProfileActionButton>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
        className="flex items-center justify-center w-full bg-red-600 text-white text-lg px-5 py-3 mt-4 rounded-lg hover:bg-red-700 transition-all duration-300"
      >
        <LogOut className="mr-2" size={20} />
        Log Out
      </button>
    </div>
  );
};

export default UserProfile;
