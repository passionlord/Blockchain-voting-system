import React from "react";
import styles from "./VoteSuccessful.module.css";
import { Link } from "react-router-dom";

const VoteSuccessful = () => {
  return (
    <div className={styles.Success}>
      <div className={styles.SuccessTitle}>
        <p className={styles.SuccessText}>VOTE SUCCESSFUL</p>
      </div>

      <div className={styles.btnNav}>
        <div className={styles.NavButton}>
          <Link to="/VoterSection">
            <button className={styles.button} type="button">
              GO back to voter page
            </button>
          </Link>
        </div>
        <div className={styles.NavButton}>
          <Link to="/">
            <button className={styles.button} type="button">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoteSuccessful;
