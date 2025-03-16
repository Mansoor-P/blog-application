import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../services/blogService";
import { FaRegEye, FaRegHeart, FaRegComment } from "react-icons/fa";
import { motion } from "framer-motion";
import DOMPurify from "dompurify"; // ✅ Import DOMPurify for sanitization

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await fetchBlogById(id);
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getBlog();
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!blog)
    return <p className="text-center text-gray-500 mt-10">Blog not found.</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 space-y-8 mt-12"
    >
      <motion.img
        src={blog.coverImageUrl || "/default-blog.jpg"}
        alt={blog.title}
        className="w-full rounded-lg shadow-xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
        {blog.title}
      </h1>

      <div className="text-gray-500 flex space-x-4 text-lg">
        <span>
          By{" "}
          <span className="font-semibold text-gray-700">
            {blog.authorUsername || "Unknown"}
          </span>
        </span>
        <span>
          | Published:{" "}
          {blog.publishedAt ? new Date(blog.publishedAt).toDateString() : "N/A"}
        </span>
      </div>

      <div className="flex space-x-6 text-gray-600 text-base mt-4">
        <span className="flex items-center gap-2">
          <FaRegEye className="text-blue-500" /> {blog.viewsCount || 0}
        </span>
        <span className="flex items-center gap-2">
          <FaRegHeart className="text-red-500" /> {blog.likesCount || 0}
        </span>
        <span className="flex items-center gap-2">
          <FaRegComment className="text-green-500" /> {blog.commentsCount || 0}
        </span>
      </div>

      {/* ✅ Display content safely without raw HTML tags */}
      <motion.div
        className="leading-relaxed text-lg text-gray-700 mt-6 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            blog.content || "<p>No content available.</p>"
          ).replace(
            /<a /g,
            '<a class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" '
          ),
        }}
      />

      {Array.isArray(blog.tags) && blog.tags.length > 0 && (
        <div className="mt-6">
          <span className="font-semibold text-lg">Tags:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {blog.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BlogDetail;
