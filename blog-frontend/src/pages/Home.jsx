import React from "react";
import styles from "../styles/LandingPage.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Left Side - Text Content */}
      <div className={styles.textContent}>
        <h1 className={styles.title}>Tech & Engineering</h1>
        <h2 className={styles.subtitle}>Stories & Ideas</h2>
        <p className={styles.description}>
          A place to read, write, and deepen your understanding
        </p>
        <button className={styles.readButton}>Start Reading</button>
      </div>

      {/* Right Side - Image */}
      <div className={styles.imageContainer}>
        <img
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="Tech Illustration"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Home;
