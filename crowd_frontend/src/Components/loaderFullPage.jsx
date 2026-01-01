import React from "react";
import styles from "./styles/loaderFullPage.module.css";

const LoaderFullPage = () => {
  return (
    <>
      <div className={styles.fullpage}>
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoaderFullPage;
