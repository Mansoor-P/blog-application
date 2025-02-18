import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 text-left">
          <ul className="flex flex-wrap md:flex-nowrap space-x-6 md:space-x-8 mb-4 md:mb-0">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/3 text-center mb-4 md:mb-0">
          <h2 className="font-bold text-2xl mb-2">MANSOOR</h2>
        </div>

        <div className="md:w-1/3 text-right">
          <ul className="flex space-x-6 md:space-x-8">
            <li>
              <a href="#" className="hover:underline">
                Git Hub
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
