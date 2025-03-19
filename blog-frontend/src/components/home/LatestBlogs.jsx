import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../services/blogService";
import { getUserProfile } from "../../services/authService";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const LatestBlogs = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [userProfiles, setUserProfiles] = useState({});

  useEffect(() => {
    const loadLatestBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        const sortedBlogs = blogs
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);
        setLatestBlogs(sortedBlogs);

        const profiles = {};
        await Promise.all(
          sortedBlogs.map(async (blog) => {
            if (blog.authorId && !profiles[blog.authorId]) {
              try {
                const userProfile = await getUserProfile(blog.authorId);
                profiles[blog.authorId] = userProfile;
              } catch (error) {
                console.error(
                  `Error fetching profile for user ${blog.authorId}:`,
                  error
                );
                profiles[blog.authorId] = {
                  profilePictureUrl: "/default-avatar.png",
                };
              }
            }
          })
        );

        setUserProfiles(profiles);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      }
    };

    loadLatestBlogs();
  }, []);

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div className="py-10 px-4 sm:px-10 lg:px-20 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Latest Blogs</h2>

      {/* "See More Blogs" Button */}
      <div className="flex justify-end mt-8">
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-green-500 text-lg font-semibold hover:text-green-600 transition"
        >
          <span>See More Blogs</span>
          <ArrowRight className="w-5 h-5" /> {/* Right Arrow Icon */}
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestBlogs.map((blog, index) => {
          const user = userProfiles[blog.authorId] || {};
          return (
            <div
              key={blog.id || index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-white p-4 flex flex-col"
            >
              <img
                src={blog.coverImageUrl}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">
                {truncateText(blog.title, 40)}
              </h3>
              <div className="flex items-center gap-3 mt-3">
                <img
                  src={user.profilePictureUrl || "/default-avatar.png"}
                  alt={blog.authorUsername}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{blog.authorUsername}</p>
                  <p className="text-xs text-gray-500">Author</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs mt-2">
                {new Date(blog.createdAt).toLocaleString()}
              </p>
              <p className="text-gray-700 text-sm mt-3 line-clamp-2">
                {blog.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestBlogs;
