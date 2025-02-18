import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MarqueeComponent = ({
  text,
  fontSize = "2xl",
  speed = 2,
  color = "white",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      let animationId;

      const animate = () => {
        container.scrollLeft += speed;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.offsetWidth
        ) {
          container.scrollLeft = 0;
        }

        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => cancelAnimationFrame(animationId);
    }
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-x-hidden whitespace-nowrap font-bold ${color}`}
      style={{
        height: "100px",
        lineHeight: "80px",
        fontSize: fontSize,
      }}
    >
      {text.split("•").map((item, index) => (
        <span key={index} className="mr-8">
          <Link
            to="/blogs"
            className="text-black hover:text-gray-600 transition-all duration-200"
          >
            {item.trim()}
          </Link>
          {index < text.split("•").length - 1 && " • "}
        </span>
      ))}
    </div>
  );
};

const MarqueeSection = () => {
  return (
    <section className="bg-white py-12 ">
      <div className="mx-auto">
        <MarqueeComponent
          text="Check out our latest blogs: 'The Future of AI in Healthcare' • '10 Tips for Better Web Design' • 'Exploring the World of Blockchain' • 'Sustainability in Modern Architecture' • 'How to Build a Successful Startup'"
          fontSize="64px"
          speed={3}
          color="text-black"
        />
      </div>
    </section>
  );
};

export default MarqueeSection;
