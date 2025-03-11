import React from "react";

const AboutPage = () => {
  return (
    <section className="max-w-5xl mx-auto mt-2 px-6 py-4">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 text-center lg:text-left">
        About
      </h1>
      <div className="mt-1 border-t border-gray-300"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10 gap-8">
        {/* Left Section - Image */}
        <div className="flex flex-col items-center text-center lg:w-1/3">
          {/* <img
            src="#"
            alt="Blogging Logo"
            className="w-48 h-48 object-contain border-1 rounded-full border-gray-300 shadow-lg"
          /> */}
          <h2 className="text-2xl font-semibold mt-4">
            Write. Share. Inspire.
          </h2>
          <p className="text-lg text-gray-500">
            A platform to share ideas, insights, and inspiration.
          </p>
        </div>

        {/* Right Section - Description */}
        <div className="lg:w-2/3 text-gray-700 text-lg leading-relaxed text-justify">
          <p>
            <span className="font-semibold text-gray-900">Blogging</span> is a
            modern blogging platform designed for writers, developers, and
            content creators. Whether you're sharing technical insights,
            personal experiences, or industry trends, VoxPost provides a
            seamless writing and reading experience.
          </p>
          <p className="mt-4">
            Our platform is built using{" "}
            <span className="font-semibold">
              React, Tailwind CSS, Java, and Spring Boot
            </span>
            , ensuring a fast, scalable, and user-friendly interface for both
            authors and readers.
          </p>

          {/* Features Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Key Features
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Write & Publish:</span> Create
                and share articles effortlessly.
              </li>
              <li>
                <span className="font-semibold">Personalized Feed:</span>{" "}
                Discover content tailored to your interests.
              </li>
              <li>
                <span className="font-semibold">Community Engagement:</span>{" "}
                Like, comment, and connect with other authors.
              </li>
              <li>
                <span className="font-semibold">Secure & Scalable:</span>{" "}
                Powered by microservices architecture.
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Join the Blogging Community
            </h3>
            <p className="mt-2">
              We believe that every voice matters. Whether you're an aspiring
              blogger, a tech enthusiast, or a business storyteller, VoxPost is
              the place for you. Join us and start sharing your stories today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
