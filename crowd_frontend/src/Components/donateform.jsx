import React from "react";
import { donateTo } from "../config.js";
import styles from "./styles/donateform.module.css";

const DonateForm = (props) => {
  const send_to = donateTo(props.id);

  return (
    <>
      <form className="row" method="POST" action={send_to}>
        <div className="form-group col-7">
          <span className={styles.rupeeInput}>
            <i className="fa fa-inr" aria-hidden="true"></i>
            <input
              type="number"
              className={styles.input}
              name="amount"
              placeholder="Enter Amount"
              disabled={!props.isActivated}
              required
              value={props.amount}
              onChange={props.onAmountChange}
            />
          </span>
        </div>

        <div className={`col-5 ${styles.submit}`}>
          <button
            type="submit"
            disabled={!props.isActivated}
            className={`btn col-12 ${styles.btn} ${
              !props.isActivated
                ? `btn-secondary ${styles.disabled}`
                : `btn-success ${styles.active}`
            }`}
          >
            Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default DonateForm;
