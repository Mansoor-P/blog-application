import React, { useEffect, useState } from "react";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || !user.id) {
      console.error("No user ID found. Please log in.");
      return;
    }

    fetch(`http://localhost:8080/api/blogs/user/${user.id}`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [user]);

  return (
    <div>
      <h2>{user.username}'s Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserBlogs;
