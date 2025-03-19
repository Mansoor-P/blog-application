import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import {
  FaGithub,
  FaLink,
  FaTwitter,
  FaMedium,
  FaCode,
  FaCamera,
} from "react-icons/fa";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [socialLinks, setSocialLinks] = useState({
    github: "",
    portfolio: "",
    leetcode: "",
    medium: "",
    twitter: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser);
      setFullName(loggedUser.fullName);
      setUsername(loggedUser.username);
      setEmail(loggedUser.email);
      setBio(loggedUser.bio || "");
      setProfilePicture(loggedUser.profilePictureUrl || null);
      setSocialLinks({
        github: loggedUser.github || "",
        portfolio: loggedUser.portfolio || "",
        leetcode: loggedUser.leetcode || "",
        medium: loggedUser.medium || "",
        twitter: loggedUser.twitter || "",
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      fullName,
      username,
      email,
      bio,
      profilePictureUrl: profilePicture,
      ...socialLinks,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate(`/user/${updatedUser.username}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white  rounded-xl">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Edit Profile
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={profilePicture || "/default-avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
            />
            <label className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition">
              <FaCamera />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </label>
          </div>
          <p className="mt-2 text-gray-500 text-sm">Change profile picture</p>
        </div>

        {/* Form Section */}
        <div className="md:col-span-2 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Full Name"
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required={true}
              />
              <FormInput
                label="Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={true}
              />
            </div>

            <FormInput
              label="Email Address"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Bio
              </label>
              <textarea
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
                placeholder="Tell something about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>

            {/* Social Media Links */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Social Links
              </label>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(socialLinks).map(([key, value], index) => (
                  <div key={index} className="flex items-center gap-2">
                    {key === "github" && <FaGithub className="text-gray-700" />}
                    {key === "portfolio" && (
                      <FaLink className="text-gray-700" />
                    )}
                    {key === "leetcode" && <FaCode className="text-gray-700" />}
                    {key === "medium" && <FaMedium className="text-gray-700" />}
                    {key === "twitter" && (
                      <FaTwitter className="text-gray-700" />
                    )}
                    <input
                      type="url"
                      className="w-full p-2 border rounded-md"
                      placeholder={`${
                        key.charAt(0).toUpperCase() + key.slice(1)
                      } URL`}
                      value={value}
                      onChange={(e) =>
                        setSocialLinks({
                          ...socialLinks,
                          [key]: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
