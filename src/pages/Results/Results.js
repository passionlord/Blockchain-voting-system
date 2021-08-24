import React from "react";
import styles from "./Results.module.css";
import avatar from "../../images/avatar.png";

const Results = () => {
  return (
    <div className={styles.wrap}>
      <h1>Candidates Won</h1>
      <div className={styles.details}>
        <div className={styles.gridContainer}>
          <div className={styles.rank}>
            <p>1</p>
            <span>st</span>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/sparkler.png"
                alt=""
              />
            </div>
          </div>
          <img
            className={styles.avatarImg}
            src={avatar}
            height="80px"
            width="80px"
            alt=""
          ></img>
          <div className={styles.name}>Shraddha Tiwari</div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.gridContainer}>
          <div className={styles.rank}>
            <p>2</p>
            <span>nd</span>
          </div>
          <img
            className={styles.avatarImg}
            src={avatar}
            height="80px"
            width="80px"
            alt=""
          ></img>
          <div className={styles.name}>Faiyaz khan</div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.gridContainer}>
          <div className={styles.rank}>
            <p>3</p>
            <span>rd</span>
          </div>
          <img
            className={styles.avatarImg}
            src={avatar}
            height="80px"
            width="80px"
            alt=""
          ></img>
          <div className={styles.name}>Vighnesh Raikar</div>
        </div>
      </div>
    </div>
  );
};

export default Results;
