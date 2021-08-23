import styles from "./Footer.module.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer__section">
      <footer>
        <img className={styles.logoImage} src={logo} alt=""></img>
        <p> @ Copyright 2021 </p>
      </footer>
    </div>
  );
};

export default Footer;
