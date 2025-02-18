import React from 'react';
import BlogCard from './BlogCard';

const RightColumn = ({ blogs }) => {
  return (
    <div className="w-1/4 space-y-4">
      {blogs.slice(5, 8).map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default RightColumn;
