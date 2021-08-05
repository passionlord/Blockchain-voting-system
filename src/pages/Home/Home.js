import React from "react";
import styles from "./Home.module.css";

const Body = () => {
  return (
    <div className={styles.home}>
      <div className={styles.bigTitle}>
        <p>BLOCK CHAIN VOTING SYSTEM</p>
      </div>
      <img className={styles.person} src="/images/person.png" alt=""></img>
    </div>
  );
};

export default Body;
