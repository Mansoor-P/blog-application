import React, { useEffect, useReducer } from "react";
import { fetchBlogs } from "../services/blogService";
import { blogReducer, initialState } from "../reducers/blogReducer";
import LeftColumn from "../features/blogs/LeftColumn";
import MiddleColumn from "../features/blogs/MiddleColumn";
import RightColumn from "../features/blogs/RightColumn";

const BlogsPage = () => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        dispatch({ type: "FETCH_SUCCESS", payload: blogs });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    loadBlogs();
  }, []);

  if (state.loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  if (state.error) {
    return (
      <div className="text-center text-xl font-semibold text-red-600">
        {state.error}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow justify-center mt-20 p-6 gap-6">
        <LeftColumn blogs={state.blogs} />
        <MiddleColumn blogs={state.blogs} />
        <RightColumn blogs={state.blogs} />
      </div>
    </div>
  );
};

export default BlogsPage;
