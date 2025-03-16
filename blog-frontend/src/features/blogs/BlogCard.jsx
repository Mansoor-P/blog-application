import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  if (!blog) {
    return <p className="text-red-500">Blog data is missing.</p>;
  }

  const {
    postId,
    coverImageUrl,
    title = "Untitled Post",
    content = "No content available.",
    authorUsername = "Unknown Author",
    createdAt,
  } = blog;

  return (
    <div
      className="my-4 p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={() => postId && navigate(`/blog/${postId}`)}
    >
      <img
        src={coverImageUrl || "https://via.placeholder.com/400"}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mt-2 hover:text-indigo-600 transition duration-200">
        {blog.title || "Untitled Blog"}
      </h2>

      <p
        className="text-gray-600 mt-2"
        dangerouslySetInnerHTML={{ __html: content.substring(0, 100) + "..." }}
      ></p>

      <div className="text-sm text-gray-500 mt-4">
        <p>
          <strong>Author:</strong> {authorUsername}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {createdAt ? new Date(createdAt).toLocaleDateString() : "Unknown"}
        </p>
      </div>
    </div>
  );
};

// ✅ Make sure BlogCard is exported as default
export default BlogCard;
