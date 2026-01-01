import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = ({ navBackground }) => {
  return (
    <nav
      className={`navbar navbar-expand-md sticky-top ${styles.navbar} ${navBackground}`}
    >
      <div className="container-fluid">
        <Link className={styles.brand} to="/">
          <img src="/navImage.png" alt="title" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                CONTACT US
              </Link>
            </li>
            {localStorage.getItem("token") && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                  ADMIN DASHBOARD
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
