import React from 'react';
import BlogCard from './BlogCard';

const MiddleColumn = ({ blogs }) => {
  return (
    <div className="w-2/4 space-y-6">
      {blogs.slice(3, 5).map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default MiddleColumn;
