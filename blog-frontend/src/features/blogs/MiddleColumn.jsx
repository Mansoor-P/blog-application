import React from "react";
import BlogCard from "./BlogCard";

const MiddleColumn = ({ blogs }) => {
  return (
    <div className="w-full md:w-2/4 space-y-6">
      {blogs.length > 3 &&
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default MiddleColumn;
