import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, text, className = "" }) => {
  return (
    <Link to={to} className={`hover:text-gray-400 ${className}`}>
      {text}
    </Link>
  );
};

export default NavLink;
