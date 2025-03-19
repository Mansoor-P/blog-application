import React from "react";
import { X } from "lucide-react"; // ✅ Using Lucide Icons
import styles from "../assets/styles/Navbar.module.css";
import Button from "./Button";
import NavLink from "./NavLink";
import AuthButtons from "./AuthButtons";

const MobileMenu = ({ menuOpen, setMenuOpen, menuItems, user, navigate }) => (
  <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
    <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
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
    <AuthButtons user={user} />
    <Button
      onClick={() => {
        setMenuOpen(false);
        navigate(user ? "/blogs" : "/login");
      }}
      text="Get Started"
      color="white"
    />
  </div>
);

export default MobileMenu;
