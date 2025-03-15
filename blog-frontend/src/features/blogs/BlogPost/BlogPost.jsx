import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../../services/blogService";
import slugify from "slugify";
import Button from "../../../components/Button";

const BlogPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    coverImageUrl: "",
    tags: "",
    status: "DRAFT", // Default status
    readTime: 0, // Will be calculated dynamically
    authorId: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.userId) {
        setFormData((prev) => ({
          ...prev,
          authorId: user.userId, // ✅ Corrected from `user.id`
        }));
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.error("Error reading user data:", err);
      navigate("/login");
    }
  }, [navigate]);

  // ✅ Auto-generate slug from title
  useEffect(() => {
    if (formData.title) {
      setFormData((prev) => ({
        ...prev,
        slug: slugify(formData.title, { lower: true, strict: true }),
      }));
    }
  }, [formData.title]);

  // ✅ Estimate read time (approx 200 words per minute)
  useEffect(() => {
    const wordCount = formData.content.trim().split(/\s+/).length;
    setFormData((prev) => ({
      ...prev,
      readTime: Math.ceil(wordCount / 200),
    }));
  }, [formData.content]);

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
      setFormData({
        title: "",
        slug: "",
        summary: "",
        content: "",
        coverImageUrl: "",
        tags: "",
        status: "DRAFT",
        readTime: 0,
        authorId: formData.authorId,
      });

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
            htmlFor="slug"
            className="block text-gray-700 font-medium mb-1"
          >
            Slug (Auto-generated)
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="w-full p-3 border rounded-lg bg-gray-100"
            value={formData.slug}
            readOnly
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

        <div>
          <label
            htmlFor="coverImageUrl"
            className="block text-gray-700 font-medium mb-1"
          >
            Cover Image URL (Optional)
          </label>
          <input
            type="url"
            name="coverImageUrl"
            id="coverImageUrl"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste cover image URL here..."
            value={formData.coverImageUrl}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="tags"
            className="block text-gray-700 font-medium mb-1"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Java, React, Spring Boot"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="status"
              checked={formData.status === "PUBLISHED"}
              onChange={() =>
                setFormData((prev) => ({
                  ...prev,
                  status: prev.status === "DRAFT" ? "PUBLISHED" : "DRAFT",
                }))
              }
              className="mr-2"
            />
            Publish Now
          </label>
          <span className="text-gray-500">
            Estimated Read Time: {formData.readTime} min
          </span>
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
