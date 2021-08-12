import React from "react";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <section className="adminFormContainer">
      <section id="section">
        <div className="contentBx">
          <div className="formBx">
            <h2>Admin Login</h2>
            <form>
              <div className="inputBx">
                <label>Email Id</label>
                <input
                  className="input"
                  type="email"
                  placeholder="enter e-mail"
                ></input>
              </div>
              <div className="inputBx">
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  placeholder="enter password"
                ></input>
              </div>
              <div className="inputBx">
                <button className="input" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdminLogin;
