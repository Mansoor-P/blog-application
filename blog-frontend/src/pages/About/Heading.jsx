import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-900 text-center lg:text-left">{title}</h1>
      <div className="mt-1 border-t border-gray-300"></div>
    </div>
  );
};

export default Heading;
