import React from "react";
import styles from "./NavBar.module.css";
import { Route, Link } from "react-router-dom";
import AboutUs from "../../pages/AboutUs/AboutUs";
import "../../CustomScrollbar.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoDiv}>
        <img
          className={styles.logoImage}
          src="%PUBLIC_URL%/images/logo.png"
          alt=""
        ></img>
        {/* <h2 className={styles.home}>HOME</h2> */}
        <Link to="/" className={styles.home}>
          HOME
        </Link>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/Results" className={styles.effectUnderline}>
              RESULTS
            </Link>
          </li>
          <li>
            <Link to="/VoterSection" className={styles.effectUnderline}>
              VOTER SECTION
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className={styles.effectUnderline}>
              ABOUT US
            </Link>
          </li>
        </ul>
      </nav>
      <a href className={styles.voteLogo} src="" alt="">
        COUNT EVERY VOTE
      </a>
      <div className={styles.circle}></div>
    </div>
  );
};

export default NavBar;
