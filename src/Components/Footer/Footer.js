import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="footer__section">
      <footer>
        <img className={styles.logoImage} src="/images/logo.png" alt=""></img>
        <p> @ Copyright 2021 </p>
      </footer>
    </div>
  );
};

export default Footer;
