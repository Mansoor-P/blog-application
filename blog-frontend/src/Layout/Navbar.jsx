import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "../assets/styles/Navbar.module.css";
import NavLink from "../components/NavLink";
import AuthButtons from "../components/AuthButtons";
import MobileMenu from "../components/MobileMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const menuItems = ["Blogs", "About"];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className={`${styles.navbar} p-4`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <Link to="/" className={`${styles.logo} text-xl font-semibold`}>
          Blogging
        </Link>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <NavLink key={item} to={`/${item.toLowerCase()}`} text={item} />
          ))}
        </div>

        {/* Right Side: Auth Buttons & Get Started Button */}
        <div className="hidden md:flex items-center space-x-4">
          <AuthButtons user={user} />
          <button
            onClick={() => navigate(user ? "/blogs" : "/login")}
            className="px-6 py-3 font-medium text-white bg-black rounded-full transition-all duration-300 border border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-lg"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuItems={menuItems}
        user={user}
        navigate={navigate}
      />
    </nav>
  );
};

export default Navbar;
