import React from "react";

const AboutDescription = () => {
  return (
    <div className="lg:w-2/3 text-gray-700 text-lg leading-relaxed text-justify">
      <p>
        <span className="font-semibold text-gray-900">Blogging</span> is a modern blogging platform designed for writers, developers, and content creators. Whether you're sharing technical insights, personal experiences, or industry trends, VoxPost provides a seamless writing and reading experience.
      </p>
      <p className="mt-4">
        Our platform is built using{" "}
        <span className="font-semibold">React, Tailwind CSS, Java, and Spring Boot</span>, ensuring a fast, scalable, and user-friendly interface for both authors and readers.
      </p>
    </div>
  );
};

export default AboutDescription;
