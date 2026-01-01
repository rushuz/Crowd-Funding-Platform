import React from "react";
// import { Link } from "react-router-dom";
import logo from "./assets/RotaractIcon.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div className="row">
        <div className={`col-12 col-sm-6 col-md-4 ${styles.left}`}>
          <a href="/">
            {/* <img className={`${styles.logo}`} src={logo} alt="ROTARACT LOGO" /> */}
          </a>
          <br />
          <p className={`${styles.caption}`}>
            Rushact Club <br /> WFD
          </p>
        </div>
        <div className={`col-12 col-sm-6 col-md-4 ${styles.middle}`}>
          <p>
            <b>Follow us on</b>
          </p>
          <a
            className={`${styles.facebook}`}
            href="https://www.facebook.com/profile.php?id=100080711896093"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className={`${styles.linkedin}`}
            href="https://www.linkedin.com/in/rushabh-shiradkar-41956824a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <br />
          <div className={`${styles.links}`}>
            <a className={`${styles.link}`} href="/about-us">
              About
            </a>
            <a className={`${styles.link}`} href="/contact-us">
              Contact Us
            </a>
            <a
              className={`${styles.link}`}
              href="https://wingsfordreams.org/"
              target="_blank"
              rel="noreferrer"
            >
              RACF-WFD
            </a>
          </div>
        </div>
        <div className={`col-12 col-sm-12 col-md-4 ${styles.right}`}>
          <p className={`${styles.names}`}>
            <span style={{ fontWeight: "bolder" }}>Developed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="https://www.linkedin.com/in/rushabh-shiradkar-41956824a/"
              target="_blank"
              rel="noreferrer"
            >
              Rushabh Shiradkar
            </a>
            <br />
            <br />
            <span style={{ fontWeight: "bolder" }}>Designed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="https://www.linkedin.com/in/rushabh-shiradkar-41956824a/"
              target="_blank"
              rel="noreferrer"
            >
              Rushabh Shiradkar
            </a>
          </p>
          <p>
            For any queries, reach out to us at email
            <br />
            <b>rushabhshiradkar1717@gmail.com</b>
          </p>
        </div>
      </div>

      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <p style={{ textAlign: "center" }}>
          Copyright &copy; 2025 RUSHACT CLUB. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
