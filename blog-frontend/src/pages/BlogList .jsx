import React, { useEffect, useReducer } from "react";
import { fetchBlogs } from "../services/blogService";
import { blogReducer, initialState } from "../reducers/blogReducer";
import MiddleColumn from "../features/blogs/MiddleColumn";

const BlogList = () => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  useEffect(() => {
    const loadBlogs = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const blogs = await fetchBlogs();
        console.log("Fetched Blogs:", JSON.stringify(blogs, null, 2)); // ✅ Debug API response
        dispatch({ type: "FETCH_SUCCESS", payload: blogs });
      } catch (error) {
        console.error("Error fetching blogs:", error);
        dispatch({ type: "FETCH_ERROR", payload: "Failed to load blogs." });
      }
    };
    loadBlogs();
  }, []);

  if (state.loading) {
    return (
      <div className="text-center text-xl font-semibold" aria-live="polite">
        Loading blogs...
      </div>
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

  if (!state.blogs.length) {
    return (
      <div className="text-center text-gray-600 text-lg">No blogs found.</div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col lg:flex-row flex-grow justify-center mt-20 p-6 gap-6">
        <MiddleColumn blogs={state.blogs} />
      </div>
    </div>
  );
};

export default BlogList;
