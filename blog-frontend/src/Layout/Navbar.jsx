import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import styles from "../assets/styles/Navbar.module.css";
import Button from "../components/Button";
import NavLink from "../components/NavLink";

const Navbar = () => {
  const navigate = useNavigate();

  const getUser = () => {
    try {
      const userData = localStorage.getItem("user");
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  };

  const user = getUser();

  return (
    <nav
      className={`${styles.navbar} bg-gray-800 p-4 text-white flex justify-between items-center`}
    >
      <Link to="/" className={styles.logo}>
        Blogging
      </Link>

      <div className="flex items-center space-x-4">
        <NavLink to="/blogs" text="Blogs" />
        <NavLink to="/about" text="About" />

        {user ? (
          <>
            <NavLink
              to={user.role === "ADMIN" ? "/admin" : `/user/${user.username}`}
              text={`${user.fullName} (${user.role})`}
              className="text-indigo-500"
            />
          </>
        ) : (
          <>
            <Button to="/login" text="Login" color="white" />
            <Button to="/register" text="Register" color="white" />
          </>
        )}

        {/* Get Started Button */}
        <Button
          onClick={() => navigate(user ? "/blogs" : "/login")}
          text="Get Started"
          color="white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
