import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 text-left">
          <ul className="flex flex-wrap md:flex-nowrap space-x-6 md:space-x-8 mb-4 md:mb-0">
            <li>
              <a href="https://github.com/Mansoor-P" className="hover:underline">
                Git Hub
              </a>
            </li>{" "}
            <li>
              <a href="https://github.com/mansoor0731" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 text-right">
          <ul className="flex space-x-6 md:space-x-8">
            <Link to={"/about"}>
            About
            </Link>
            <li>
              <a href="/help" className="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="/terms-conditions" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
