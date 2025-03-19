import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { homeAnimations } from "../../assets/animations/homeAnimations";
import { enableSmoothScroll } from "../../assets/animations/globalAnimations";
import styles from "../../assets/styles/Home.module.css";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    homeAnimations(textRef, imageRef);
    enableSmoothScroll();
  }, []);

  return (
    <section className={styles.container}>
      {/* Left Side - Text Content */}
      <div ref={textRef} className={styles.textContent}>
        <h1 className={styles.title}>
          Explore{" "}
          <span className={styles.gradientText}>Tech & Engineering</span>
        </h1>
        <h2 className={styles.subtitle}>Innovations | Ideas | Stories</h2>
        <p className={styles.description}>
          Dive deep into the world of{" "}
          <strong>technology and engineering</strong> with expert insights,
          real-time discussions, and AI-powered knowledge sharing.
        </p>

        {/* Interactive Buttons */}
        <div className={styles.buttonGroup}>
          <Link to={"/blogs"} className={styles.primaryButton}>
            ✍️ Start Reading
          </Link>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div ref={imageRef} className={styles.imageContainer}>
        <img
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="Tech Illustration"
          className={styles.image}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
