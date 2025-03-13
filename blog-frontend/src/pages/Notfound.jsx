import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-6xl font-bold text-red-500">404</h2>
      <p className="mt-4 text-xl text-gray-700">Oops! Page Not Found.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
