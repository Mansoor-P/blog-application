import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-semibold text-gray-800 mt-2">{blog.title}</h2>
      <p className="text-gray-600 mt-2">{blog.summary}</p>
      
      <div className="text-sm text-gray-500 mt-4">
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Created At:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BlogCard;
