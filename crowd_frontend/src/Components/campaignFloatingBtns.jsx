import React, { useState } from "react";
import { Link } from "react-scroll";
import Share from "./shareComponent";
import DonateIcon from "./assets/donateIcon.png";
import styles from "./styles/floatingBtns.module.css";
import useHover from "../utills/useHover";

const FloatBtn = ({ campaign }) => {
  const [ref, hovered] = useHover();
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <div className={`${styles.container} ${styles.ShareIcon}`}>
        {showShare && (
          <Share
            url={window.location.href}
            title={campaign?.title}
            description={campaign?.description}
          />
        )}

        <div
          className={`${styles.share} ${styles.btn}`}
          onClick={() => setShowShare((prev) => !prev)}
        >
          {!showShare ? (
            <i className="fa fa-share-alt" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-times" aria-hidden="true"></i>
          )}
        </div>
      </div>

      <div className={`${styles.container} ${styles.DonateIcon}`}>
        <Link
          to="DonateForm"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={`btn ${styles.btn}`} ref={ref}>
            <div
              className={hovered ? styles.show : styles.hide}
              style={{ display: "inline-flex" }}
            >
              <div className={styles.text}>Donate Now {"> "}</div>
            </div>
            <img
              className={styles.img}
              src={DonateIcon}
              alt="Donate Icon"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default FloatBtn;
