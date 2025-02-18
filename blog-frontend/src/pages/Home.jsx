import React from "react";
import Hero from "../components/landing/hero";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonials";

import Marquee from "../assets/Marquee";

const Home = () => {
  return (
    <div className="font-sans bg-gray-100">
      <Hero />
      <Marquee />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
