import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <hr />
      {/* Main content section */}
      <main className="flex-grow">
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
