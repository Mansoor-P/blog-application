import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <hr className="border-gray-300 w-full" />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
