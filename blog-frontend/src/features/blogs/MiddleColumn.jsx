import React from "react";
import BlogCard from "./BlogCard"; // ✅ Importing BlogCard

const MiddleColumn = ({ blogs }) => {
  console.log("MiddleColumn Blogs:", blogs); // ✅ Debugging

  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-500">No blogs available.</p>;
  }

  return (
    <div className="w-full lg:w-2/3">
      {blogs.map((blog) => (
        <BlogCard key={blog.postId} blog={blog} /> // ✅ Rendering BlogCard
      ))}
    </div>
  );
};

export default MiddleColumn;
