import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/LandingPage.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      {/* Left Side - Text Content */}
      <div className={styles.textContent}>
        <h1 className={styles.title}>Tech & Engineering</h1>
        <h2 className={styles.subtitle}>Stories & Ideas</h2>
        <p className={styles.description}>
          A place to read, write, and deepen your understanding
        </p>
        <Link to={"/blogs"} className="bg-black hover:bg-gray-800 text-amber-50 p-3 rounded-full">
          Start Reading
        </Link>
      </div>
      {/* Right Side - Image */}
      <div className={styles.imageContainer}>
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

export default Home;
