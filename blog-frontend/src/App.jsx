import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/Notfound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content section */}
      <main className="flex-grow bg-gray-100 px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
