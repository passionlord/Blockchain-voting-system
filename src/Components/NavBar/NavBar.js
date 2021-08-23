import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import "../../CustomScrollbar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoDiv}>
        <img className={styles.logoImage} src={logo} alt=""></img>
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
