import React from "react";
import { Link } from "react-router-dom";

const COLORS = {
  blue: "bg-blue-500 hover:bg-blue-600 text-white rounded-full",
  red: "bg-red-500 hover:bg-red-600 text-white rounded-full",
  green: "bg-green-500 hover:bg-green-600 text-white rounded-full",
  yellow: "bg-yellow-500 hover:bg-yellow-600 text-white rounded-full",
  gray: "bg-gray-500 hover:bg-gray-600 text-white rounded-full",
  black: "bg-black hover:bg-gray-800 text-white rounded-full",
  white: "bg-white hover:text-gray-800 text-black rounded-full ",
};

const Button = ({
  to,
  onClick,
  text = "Click", // Default text to prevent empty button
  color = "blue",
  type = "button", // Prevent unintended form submissions
  disabled = false, // Allow disabling button
}) => {
  const colorClass = COLORS[color] || COLORS.blue; // Default to blue if invalid color is provided
  const baseStyles = `cursor-pointer px-4 py-2 rounded transition font-semibold ${colorClass} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return to ? (
    <Link to={to} className={baseStyles}>
      {text}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={baseStyles}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
