import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-white font-bold text-4xl">Mansoor</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-400 transform hover:scale-105 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-white text-lg hover:text-gray-400 transform hover:scale-105 transition-all duration-300"
          >
            Blogs
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-black p-4 space-y-4`}
      >
        <Link
          to="/"
          className="text-white text-lg hover:text-gray-400 transform hover:scale-105 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/blogs"
          className="text-white text-lg hover:text-gray-400 transform hover:scale-105 transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
