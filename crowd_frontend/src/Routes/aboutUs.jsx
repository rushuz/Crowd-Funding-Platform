import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          RUSHACT stands for <strong>Rushabh’s Unified Social Hub for Action & Crowdfunding</strong> — a platform built with a simple belief: real change begins when people come together to act.
        </p>
        <h2>Our Vision</h2>
        <p>Our vision is to create a trusted digital ecosystem where generosity meets accountability.</p>

        <h2>What Makes RUSHACT Different</h2>
        <ul>
          <li>Purpose-driven campaigns</li>
          <li>Secure and transparent fundraising</li>
          <li>Community-first approach</li>
          <li>User-friendly experience</li>
        </ul>

        <h2>Our Mission</h2>
        <p>Our mission is to simplify crowdfunding while promoting social responsibility and meaningful impact.</p>

        <h2>Join the Movement</h2>
        <p>With RUSHACT, you don’t just donate — you take action.</p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
