import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Mansoor-P"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4 mt-4 md:mt-0">
          {["About", "Help", "Terms", "Privacy", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-gray-400"
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-gray-400 mt-4 md:mt-0">
          &copy; {currentYear} Blogging Platform
        </p>
      </div>
    </footer>
  );
};

export default Footer;
