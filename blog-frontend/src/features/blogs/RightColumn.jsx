import React from "react";
import BlogCard from "./BlogCard";

const RightColumn = ({ blogs }) => {
  return (
    <div className="w-full md:w-1/4 space-y-4">
      {blogs.length > 5 &&
        blogs.slice(5, 8).map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default RightColumn;
