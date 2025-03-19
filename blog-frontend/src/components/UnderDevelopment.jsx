import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaTools, FaArrowLeft } from "react-icons/fa";

const UnderDevelopment = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center text-gray-00 overflow-hidden">
      {/* Grid Lines with Darker Color */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="gray"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Rocket Animation */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="text-6xl text-gray-800"
      >
        <FaRocket />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-5xl font-bold mt-4 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Feature Under Development
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-xl font-medium mt-2 text-gray-700 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <FaTools /> We're Building Something Great
      </motion.h2>

      {/* Info Text */}
      <motion.p
        className="text-gray-800 text-lg max-w-lg leading-relaxed mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Our team is hard at work crafting a **powerful new experience**. Stay
        tuned for updates as we roll out exciting features soon.
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-2 border border-gray-600 text-gray-800 rounded-lg font-medium transition-all hover:bg-gray-800 hover:text-white"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;
