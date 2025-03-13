import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const defaultImage = "https://via.placeholder.com/400";

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div
      className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      <img
        src={blog.image || defaultImage}
        alt={blog.title || "Blog Image"}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-semibold text-gray-800 mt-2 hover:text-indigo-600 transition duration-200">
        {blog.title}
      </h2>

      <p className="text-gray-600 mt-2">{truncateText(blog.summary, 100)}</p>

      <div className="text-sm text-gray-500 mt-4">
        <p>
          <strong>Author:</strong> {blog.author}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
