import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../services/blogService";
import { FaRegEye, FaRegHeart, FaRegComment } from "react-icons/fa";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 space-y-8 mt-12"
    >
      <motion.img
        src={blog.coverImageUrl}
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
            {blog.authorUsername}
          </span>
        </span>
        <span>| Published: {new Date(blog.publishedAt).toDateString()}</span>
      </div>

      <div className="flex space-x-6 text-gray-600 text-base mt-4">
        <span className="flex items-center gap-2">
          <FaRegEye className="text-blue-500" /> {blog.viewsCount}
        </span>
        <span className="flex items-center gap-2">
          <FaRegHeart className="text-red-500" /> {blog.likesCount}
        </span>
        <span className="flex items-center gap-2">
          <FaRegComment className="text-green-500" /> {blog.commentsCount}
        </span>
      </div>

      <motion.p
        className="leading-relaxed text-lg text-gray-700 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {blog.content}
      </motion.p>

      <div className="mt-6">
        <span className="font-semibold text-lg">Tags:</span>
        <span className="text-blue-600 ml-2">{blog.tags}</span>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
