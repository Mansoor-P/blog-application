import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Terms and Conditions</h2>
      
      <p className="text-gray-600 mb-4">
        Welcome to our blogging platform. By using our website, you agree to the following terms and conditions.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6">1. User Responsibilities</h3>
      <p className="text-gray-600">
        - Users must provide accurate and up-to-date information.<br />
        - Content shared must not violate copyright laws or community guidelines.<br />
        - Users are responsible for their own content.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6">2. Prohibited Activities</h3>
      <p className="text-gray-600">
        - Posting hateful, abusive, or illegal content.<br />
        - Spamming or misleading other users.<br />
        - Attempting to breach website security.
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mt-6">3. Account Termination</h3>
      <p className="text-gray-600">
        We reserve the right to terminate or suspend your account if you violate these terms.
      </p>

    
    </div>
  );
};

export default Terms;
