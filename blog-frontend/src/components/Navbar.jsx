import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          Blogging
        </Link>
        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
          <Link to="/blogs" className={styles.navItem}>
            Blogs
          </Link>
          <Link to="/login" className={styles.navItem}>
            Sign in
          </Link>
          <Link to="/register" className={styles.getStarted}>
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
