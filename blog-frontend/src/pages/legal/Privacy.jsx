import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white  rounded-lg">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Privacy Policy</h2>

      <p className="text-gray-600 mb-4">
        Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6">1. Information We Collect</h3>
      <p className="text-gray-600">
        - Name and email address during account registration.<br />
        - Content you post on our platform.<br />
        - Cookies and usage data for improving user experience.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6">2. How We Use Your Information</h3>
      <p className="text-gray-600">
        - To personalize your experience on our platform.<br />
        - To improve our services based on user feedback.<br />
        - To send notifications or important updates.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6">3. Data Security</h3>
      <p className="text-gray-600">
        We implement strong security measures to protect your data, but we cannot guarantee 100% security.
      </p>

    
    </div>
  );
};

export default Privacy;
