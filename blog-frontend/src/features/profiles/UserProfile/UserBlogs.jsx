import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogsByUser } from "../../../services/blogService";
import { FaRegEye, FaRegHeart, FaRegComment } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UserBlogs = () => {
  const { username } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchBlogsByUser(username);
        console.log("Fetched blogs:", data); // Debugging

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received.");
        }

        setBlogs(data);
      } catch (err) {
        console.error("Error fetching user blogs:", err);
        setError(err.message || "Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };

    getUserBlogs();
  }, [username]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!blogs.length)
    return <p className="text-center text-gray-500 mt-10">No blogs found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 mt-12">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center">
        Blogs by {username}
      </h1>

      {blogs.map((blog) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <Link to={`/blog/${blog.id}`}>
            <img
              src={blog.coverImageUrl || "/default-blog.jpg"}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </Link>

          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            <Link to={`/blog/${blog.id}`} className="hover:text-blue-600">
              {blog.title}
            </Link>
          </h2>

          <p className="text-gray-600 mt-2">
            Published:{" "}
            {blog.publishedAt
              ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Not Published"}
          </p>

          <div className="flex space-x-4 text-gray-600 text-sm mt-3">
            <span className="flex items-center gap-2">
              <FaRegEye className="text-blue-500" /> {blog.viewsCount || 0}
            </span>
            <span className="flex items-center gap-2">
              <FaRegHeart className="text-red-500" /> {blog.likesCount || 0}
            </span>
            <span className="flex items-center gap-2">
              <FaRegComment className="text-green-500" />{" "}
              {blog.commentsCount || 0}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UserBlogs;
