import React from "react";

const Features = () => {
  return (
    <section className="mt-2 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 mt-2">
          Discover the benefits of staying informed with our platform
        </p>
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto mt-10 space-x-8 px-6 py-4">
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Latest Articles</h3>
            <p className="mt-4 text-gray-600">
              Stay up-to-date with the most recent articles in your area of
              interest.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Expert Authors</h3>
            <p className="mt-4 text-gray-600">
              Our articles are written by professionals who are experts in
              their fields.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">User-Friendly</h3>
            <p className="mt-4 text-gray-600">
              Our platform is easy to navigate, ensuring the best user
              experience.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Customizable Themes</h3>
            <p className="mt-4 text-gray-600">
              Personalize your reading experience with customizable themes.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Mobile-Optimized</h3>
            <p className="mt-4 text-gray-600">
              Enjoy seamless access to articles on all your mobile devices.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Community Support</h3>
            <p className="mt-4 text-gray-600">
              Join a community of like-minded individuals and discuss topics.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Analytics Insights</h3>
            <p className="mt-4 text-gray-600">
              Get detailed insights on article performance and user engagement.
            </p>
          </div>
          <div className="flex-shrink-0 w-64 bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold">Cloud Integration</h3>
            <p className="mt-4 text-gray-600">
              Sync your content across all devices using cloud technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
