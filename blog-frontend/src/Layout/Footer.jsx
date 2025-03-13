import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://github.com/Mansoor-P"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/your-linkedin-profile"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" className="hover:underline">
                Help
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-conditions" className="hover:underline">
                Terms
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="hover:underline">
                Privacy
              </NavLink>
            </li>
          </ul>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Blogging Platform
        </p>
      </div>
    </footer>
  );
};

export default Footer;
