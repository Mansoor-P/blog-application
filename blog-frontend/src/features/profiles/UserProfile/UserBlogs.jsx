import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBlogsByUser } from "../../../services/blogService";

const UserBlogs = () => {
  const { userId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchBlogsByUser(userId);
        setBlogs(response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Blogs</h2>
      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className="text-gray-600">You have not posted any blogs yet.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map(({ id, title, summary }) => (
            <div key={id} className="border-b pb-4">
              <h3 className="text-2xl font-semibold text-indigo-600">
                <Link to={`/blog/${id}`}>{title}</Link>
              </h3>
              <p className="text-gray-600">{summary}</p>
              <Link
                to={`/blog/${id}`}
                className="text-indigo-600 hover:underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBlogs;
