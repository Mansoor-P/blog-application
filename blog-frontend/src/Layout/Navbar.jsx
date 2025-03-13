import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "../assets/styles/Navbar.module.css";
import Button from "../components/Button";
import NavLink from "../components/NavLink";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || null;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = ["Blogs", "About"];
  const authButtons = user
    ? [
        {
          to: user.role === "ADMIN" ? "/admin" : `/user/${user.username}`,
          text: `${user.fullName} (${user.role})`,
          className: "text-indigo-400",
        },
      ]
    : [
        { to: "/login", text: "Login" },
        { to: "/register", text: "Register" },
      ];

  return (
    <nav className={`${styles.navbar} p-4`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className={`${styles.logo} text-xl font-semibold`}>
          Blogging
        </Link>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <NavLink key={item} to={`/${item.toLowerCase()}`} text={item} />
          ))}
          {authButtons.map(({ to, text, className }) => (
            <NavLink key={text} to={to} text={text} className={className} />
          ))}
          <Button
            onClick={() => navigate(user ? "/blogs" : "/login")}
            text="Get Started"
            color="white"
          />
        </div>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {menuItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            text={item}
            onClick={() => setMenuOpen(false)}
          />
        ))}
        {authButtons.map(({ to, text, className }) => (
          <NavLink
            key={text}
            to={to}
            text={text}
            className={className}
            onClick={() => setMenuOpen(false)}
          />
        ))}
        <Button
          onClick={() => {
            setMenuOpen(false);
            navigate(user ? "/blogs" : "/login");
          }}
          text="Get Started"
          color="white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
