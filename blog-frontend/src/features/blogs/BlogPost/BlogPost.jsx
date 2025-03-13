import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../../services/blogService";

import Button from "../../../components/Button";

const BlogPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
    userId: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.id) {
        setFormData((prev) => ({
          ...prev,
          author: user.fullName,
          userId: user.id,
        }));
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.error("Error reading user data:", err);
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    if (!formData.title || !formData.summary || !formData.content) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      await createBlog(formData);
      setSuccessMessage("Blog published successfully!");
      setFormData((prev) => ({
        ...prev,
        title: "",
        summary: "",
        content: "",
      }));

      setTimeout(() => {
        setSuccessMessage("");
        navigate("/blogs");
      }, 2000);
    } catch (error) {
      setError(error.message || "Failed to publish the blog.");
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Post a Blog</h2>

      {successMessage && (
        <div className="text-green-600 font-semibold text-lg text-center">
          {successMessage}
        </div>
      )}

      {error && <div className="text-red-500 text-center">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-1"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your blog title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="summary"
            className="block text-gray-700 font-medium mb-1"
          >
            Summary
          </label>
          <textarea
            name="summary"
            id="summary"
            rows="3"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a short summary of your blog..."
            value={formData.summary}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-1"
          >
            Content
          </label>
          <textarea
            name="content"
            id="content"
            rows="6"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your full blog content here..."
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            text="Publish"
            isLoading={loading}
            disabled={loading}
          >
            Publish Blog
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPost;
