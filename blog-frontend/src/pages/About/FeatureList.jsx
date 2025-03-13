import React from "react";

const features = [
  { title: "Write & Publish", description: "Create and share articles effortlessly." },
  { title: "Personalized Feed", description: "Discover content tailored to your interests." },
  { title: "Community Engagement", description: "Like, comment, and connect with other authors." },
  { title: "Secure & Scalable", description: "Powered by microservices architecture." },
];

const FeatureList = () => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold text-gray-900">Key Features</h3>
      <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="font-semibold">{feature.title}:</span> {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
