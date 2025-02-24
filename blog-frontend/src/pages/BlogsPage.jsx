import React, { useEffect, useReducer } from "react";
import { fetchBlogs } from "../services/api";
import LeftColumn from "./blogs/LeftColumn";
import MiddleColumn from "./blogs/MiddleColumn";
import RightColumn from "./blogs/RightColumn";

// Initial state for the reducer
const initialState = {
  blogs: [],
  loading: true,
  error: null,
};

// Reducer function for state management
const blogReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, blogs: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: "Error fetching blogs", loading: false };
    default:
      return state;
  }
};

const BlogsPage = () => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Fetch blogs when the component mounts
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchBlogs();
        dispatch({ type: "FETCH_SUCCESS", payload: blogs });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    loadBlogs();
  }, []);

  // Handle loading state
  if (state.loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  // Handle error state
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
      <div className="flex flex-grow justify-center mt-20 p-6 space-x-6">
        <LeftColumn blogs={state.blogs} />
        <MiddleColumn blogs={state.blogs} />
        <RightColumn blogs={state.blogs} />
      </div>
    </div>
  );
};

export default BlogsPage;
