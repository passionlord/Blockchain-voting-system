import React from "react";
import "./Admin.css";
import { Formik, Form } from "formik";
import navigationImage from "../../images/navigationImage.png";

const Admin = () => {
  return (
    <section id="pageItems">
      <div className="navPanel">
        <h2 className="h2navPanel"> NAVIGATION PANEL</h2>
        <div className="imgAndButton">
          <img
            className="navigationImage"
            src={navigationImage}
            alt=""
            width="120"
          ></img>
          <button className="addVoters">Add Voters</button>
          <button className="addCandidate">Add Candidate</button>
        </div>
      </div>
      <div className="inputDetails">
        <section className="adminFormContain">
          <section id="formSection">
            <div className="contentBx">
              <div className="formBx">
                <h2>Voter Details</h2>
                <form>
                  <div className="inputBx">
                    <label htmlFor="text">Full Name</label>
                    <input
                      className="input"
                      type="email"
                      placeholder="your Fullname.."
                    ></input>
                  </div>
                  <div className="inputBx">
                    <label htmlFor="email">Email-Id</label>
                    <input
                      className="input"
                      type="password"
                      placeholder="email.."
                    ></input>
                  </div>
                  <div className="inputBx">
                    <label htmlFor="string">Contact Number</label>
                    <input
                      className="input"
                      type="password"
                      placeholder="phone.."
                    ></input>
                  </div>
                  <div className="inputBx">
                    <label htmlFor="text">Residential Address</label>
                    <input
                      className="input"
                      type="password"
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
