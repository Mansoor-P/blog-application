import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../../services/blogService";
import slugify from "slugify";
import BlogForm from "../../RichTextEditor/BlogForm";
import MessageAlert from "../../RichTextEditor/MessageAlert ";

const BlogPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    coverImageUrl: "",
    tags: "",
    status: "DRAFT",
    readTime: 0,
    authorId: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.userId) {
        setFormData((prev) => ({ ...prev, authorId: user.userId }));
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.error("Error reading user data:", err);
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (formData.title) {
      setFormData((prev) => ({
        ...prev,
        slug: slugify(formData.title, { lower: true, strict: true }),
      }));
    }
  }, [formData.title]);

  useEffect(() => {
    if (formData.content.trim()) {
      const wordCount = formData.content.trim().split(/\s+/).length;
      setFormData((prev) => ({
        ...prev,
        readTime: Math.ceil(wordCount / 200),
      }));
    }
  }, [formData.content]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    if (!formData.title || !formData.summary || !formData.content) {
      setMessage({ type: "error", text: "All fields are required." });
      setLoading(false);
      return;
    }

    try {
      await createBlog(formData);
      setMessage({ type: "success", text: "Blog published successfully!" });

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
        setMessage({ type: "", text: "" });
        navigate("/blogs");
      }, 2000);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Failed to publish the blog.",
      });
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Post a Blog</h2>
      <MessageAlert message={message} />
      <BlogForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default BlogPost;
