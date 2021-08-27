import React from "react";
import styles from "./Admin.module.css";

import navigationImage from "../../images/navigationImage.png";

const Admin = () => {
  return (
    <section id={styles.pageItems}>
      <div className={styles.navPanel}>
        <h2 className={styles.h2navPanel}> NAVIGATION PANEL</h2>
        <div className={styles.imgAndButton}>
          <img
            className={styles.navigationImage}
            src={navigationImage}
            alt=""
            width="120"
          ></img>
          <button className={styles.addVoters}>Add Voters</button>
          <button className={styles.addCandidate}>Add Candidate</button>
        </div>
      </div>
      <div className={styles.inputDetails}>
        <section className={styles.adminFormContain}>
          <section id={styles.formSection}>
            <div className={styles.contentBx}>
              <div className={styles.formBx}>
                <h2>Voter Details</h2>
                <form>
                  <div className={styles.inputBx}>
                    <label htmlFor="text">Full Name</label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="your Fullname.."
                    ></input>
                  </div>
                  <div className={styles.inputBx}>
                    <label htmlFor="email">Email-Id</label>
                    <input
                      className={styles.input}
                      type="email"
                      placeholder="email.."
                    ></input>
                  </div>
                  <div className={styles.inputBx}>
                    <label htmlFor="string">Contact Number</label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="phone.."
                    ></input>
                  </div>
                  <div className={styles.inputBx}>
                    <label htmlFor="text">Residential Address</label>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="address.."
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Admin;
