import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaMedium } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Call to Action */}
        <div className="mb-8 lg:mb-0 max-w-sm">
          <h3 className="text-2xl font-semibold">
            Ready to share your knowledge with the world?
          </h3>
          <p className="text-gray-400 mt-2">
            Join VoxPost and start writing today. Share ideas, connect with
            readers, and grow your audience.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-300">
            Start Writing
          </button>
        </div>

        {/* Branding & About */}
        <div className="mb-8 lg:mb-0 max-w-sm">
          <h4 className="text-xl font-semibold">VoxPost</h4>
          <p className="text-gray-400 text-sm">
            A blogging platform where ideas take flight. Publish your thoughts,
            discover new perspectives, and engage with a like-minded community.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6 text-gray-400">
          {/* General Links */}
          <div>
            <h5 className="text-white font-medium mb-2">Resources</h5>
            {["Help", "Privacy Policy", "Terms Conditions", "Contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block hover:text-white text-sm py-1"
                >
                  {item}
                </NavLink>
              )
            )}
          </div>

          {/* Community & Features */}
          <div>
            <h5 className="text-white font-medium mb-2">Community</h5>
            {[
              { name: "Overview", path: "/coming-soon", ready: false },
              { name: "Features", path: "/coming-soon", ready: false },
              { name: "Writing Tips", path: "/coming-soon", ready: false },
              { name: "Blogging Guide", path: "/coming-soon", ready: false },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="block hover:text-white text-sm py-1"
              >
                {item.name}{" "}
                {!item.ready && (
                  <span className="text-gray-500">(Under Development)</span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} VoxPost. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-400">
          <a
            href="https://github.com/Mansoor-P"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} className="hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
