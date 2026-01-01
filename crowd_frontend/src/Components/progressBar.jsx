import React, { useEffect, useState } from "react";
import DonateForm from "./donateform";
import { percentCompleted } from "../utills/math";
import styles from "./styles/progressBar.module.css";

const ProgressBar = ({
  fundRaised,
  fundRequired,
  id,
  amount,
  onAmountChange,
  isActivated,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentCompleted(fundRaised, fundRequired));
  }, [fundRaised, fundRequired]);

  return (
    <>
      <div className={`p-2 col-11 ${styles.progressBar}`}>
        <div className="row justify-content-between">
          <div className="col-4">
            <p className={styles.label}>Raised:</p>
            <div>
              <i className="fa fa-inr" aria-hidden="true"></i>
              <span className={styles.value}>{fundRaised}</span>
            </div>
          </div>

          <div className="col-4 text-end">
            <p className={styles.label}>Goal:</p>
            <div>
              <i className="fa fa-inr" aria-hidden="true"></i>
              <span className={styles.value}>{fundRequired}</span>
            </div>
          </div>
        </div>

        <div className={`progress ${styles.progress}`}>
          <div
            className={`progress-bar progress-bar-animated ${styles.barColor}`}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <DonateForm
          id={id}
          amount={amount}
          onAmountChange={onAmountChange}
          isActivated={isActivated}
        />
      </div>
    </>
  );
};

export default ProgressBar;
