import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import UserProfile from "./pages/profiles/UserProfile";
import AdminProfile from "./pages/profiles/AdminProfile";

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Divider */}
      <hr className="border-gray-300 w-full" />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/admin" element={<AdminProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
