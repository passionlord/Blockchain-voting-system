import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className={styles.home}>
      <div className={styles.bigTitle}>
        <p>BLOCK CHAIN VOTING SYSTEM</p>
      </div>
      <img
        className={styles.person}
        src={require("/images/logo.png")}
        alt=""
      ></img>
      <Link className={styles.admin} to="/Admin">
        Admin
      </Link>
      <Link className={styles.admin1} to="/AdminLogin">
        AdminLogin
      </Link>
      <Link className={styles.admin2} to="/CandidateLogin">
        CandidateLogin
      </Link>
      <Link className={styles.admin3} to="/VoterLogin">
        VoterLogin
      </Link>
    </div>
  );
};

export default Body;
