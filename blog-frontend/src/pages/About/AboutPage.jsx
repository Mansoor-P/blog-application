import React from "react";
import Heading from "../About/Heading";
import AboutIntro from "../About/AboutIntro";
import AboutDescription from "../About/AboutDescription";
import FeatureList from "../About/FeatureList";
import CommunitySection from "../About/CommunitySection";

const AboutPage = () => {
  return (
    <section className="max-w-5xl mx-auto mt-2 px-6 py-4">
      <Heading title="About" />

      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10 gap-8">
        {/* Left Section */}
        <AboutIntro />

        {/* Right Section */}
        <div className="lg:w-2/3">
          <AboutDescription />
          <FeatureList />
          <CommunitySection />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
