import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="hero-section flex flex-col lg:flex-row justify-center mt-1 p-6 space-x-0 lg:space-x-6">
        {/* Left Column */}
        <div className="w-full lg:w-1/4 space-y-6">
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.QHjOBhgGLoWmUExhYJAvvgHaEo?rs=1&pid=ImgDetMain"
              alt="Business Meeting"
              className="w-full rounded-md image-hover-effect animated-image"
            />
            <h2 className="text-xl font-semibold mt-2">
              The Future of Business and Innovation
            </h2>
            <p className="text-md text-gray-500">AUG 25 • BUSINESS</p>
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.QHjOBhgGLoWmUExhYJAvvgHaEo?rs=1&pid=ImgDetMain"
              alt="Rocket Launch"
              className="w-full rounded-md image-hover-effect animated-image"
            />
            <h2 className="text-xl font-semibold mt-2">
              Exploring New Frontiers of Creativity
            </h2>
            <p className="text-md text-gray-500">FEB 2 • SCIENCE</p>
          </div>
        </div>

        {/* Middle Column (Main Featured Article) */}
        <div className="w-full lg:w-2/4">
          <img
            src="https://img.freepik.com/premium-photo/company-logo-design-new-look-logo-preasentation-office-wall_1274623-1422.jpg"
            alt="Skyscrapers"
            className="w-full rounded-md image-hover-effect animated-image"
          />
          <h1 className="text-4xl font-bold mt-4">
            Transforming Visions Into Solutions for Your Business
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Coverage on Market Trends, Industry Innovations, and Strategic Moves
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/4 space-y-6 right-column">
          <div>
            <a
              href="/blogs/trends"
              className="text-xl font-semibold text-gray-800"
            >
              Trends and Inspiration
            </a>
            <p className="text-md text-gray-500">NOV 22 • SCIENCE</p>
          </div>
          <div>
            <a
              href="/blogs/expressions"
              className="text-xl font-semibold text-gray-800"
            >
              Expressions Unveiled
            </a>
            <p className="text-md text-gray-500">SEP 14 • BUSINESS</p>
          </div>
          <div>
            <a
              href="/blogs/style-insights"
              className="text-xl font-semibold text-gray-800"
            >
              Refined Style Insights
            </a>
            <p className="text-md text-gray-500">APR 10 • ECONOMY</p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/premium-photo/company-logo-design-new-look-logo-preasentation-office-wall_1274623-1386.jpg"
              alt="Design Workspace"
              className="w-full rounded-md image-hover-effect animated-image"
            />
            <h2 className="text-xl font-semibold mt-2">
              Exploring Functionality in Everyday Design
            </h2>
            <p className="text-md text-gray-500">FEB 17 • SCIENCE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
