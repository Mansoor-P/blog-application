import React from "react";
import NavLink from "./NavLink";

const AuthButtons = ({ user }) => {
  const authLinks = user
    ? [{ to: user?.role === "ADMIN" ? "/admin" : `/user/${user?.username}`, text: `${user?.displayName || user?.username} (${user?.role || "User"})`, className: "text-indigo-400" }]
    : [{ to: "/login", text: "Login" }, { to: "/register", text: "Register" }];

  return (
    <>
      {authLinks.map(({ to, text, className }) => (
        <NavLink key={text} to={to} text={text} className={className} />
      ))}
    </>
  );
};

export default AuthButtons;
