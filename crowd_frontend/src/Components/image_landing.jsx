import React from "react";
import { Link } from "react-scroll";
import styles from "./styles/image_landing.module.css";

const ImageLanding = () => {
  return (
    <>
      <div className={styles.backgroundImage} id="Home">
        <div className={styles.title}>
          <p className={styles.text}>RUSHSACT IIITM</p>
          <p className={styles.header}>You Bestow, We Deliver</p>
        </div>

        <Link
          to="DonateForm"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className={`btn btn-success p-3 ${styles.donateBtn}`}>
            DONATE NOW
          </button>
        </Link>
      </div>
    </>
  );
};

export default ImageLanding;
