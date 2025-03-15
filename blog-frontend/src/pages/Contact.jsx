import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white py-15 rounded-lg mt-10 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        If you have any questions, collaboration ideas, or just want to say hi,
        feel free to reach out!
      </p>

      <div className="flex items-center justify-center space-x-3 bg-gray-100 p-4 rounded-lg">
        <FaEnvelope className="text-indigo-600 text-2xl" />
        <span className="text-lg text-gray-800 font-medium">
          <a href="mailto:munaf6007@gmail.com">munaf6007@gmail.com</a>
        </span>
      </div>

      <p className="text-lg text-gray-700 mt-6">
        You can email me directly or connect with me on my social platforms.
        Looking forward to hearing from you!
      </p>
    </div>
  );
};

export default Contact;
