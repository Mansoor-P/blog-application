import React, { useEffect, useReducer, useState } from "react";
import { fetchBlogs } from "../services/blogService";
import { blogReducer, initialState } from "../reducers/blogReducer";
import MiddleColumn from "../features/blogs/MiddleColumn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import the icons

const BlogList = ({ limit = 6 }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadBlogs = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const blogs = await fetchBlogs();
        dispatch({ type: "FETCH_SUCCESS", payload: blogs });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "Failed to load blogs." });
      }
    };
    loadBlogs();
  }, []);

  if (state.loading) {
    return (
      <div className="text-center text-xl font-semibold">Loading blogs...</div>
    );
  }

  if (state.error) {
    return (
      <div className="text-center text-xl font-semibold text-red-600">
        <p>{state.error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  // Pagination logic
  const totalBlogs = state.blogs.length;
  const totalPages = Math.ceil(totalBlogs / limit);
  const startIndex = (currentPage - 1) * limit;
  const displayedBlogs = state.blogs.slice(startIndex, startIndex + limit);

  if (!displayedBlogs.length) {
    return (
      <div className="text-center text-gray-600 text-lg">No blogs found.</div>
    );
  }

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col lg:flex-row flex-grow justify-center mt-20 p-6 gap-6">
        <MiddleColumn blogs={displayedBlogs} />
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-blue-500 text-white rounded-lg mr-4 hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          <FaChevronLeft size={24} />
        </button>
        <span className="px-4 py-2 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-blue-500 text-white rounded-lg ml-4 hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
