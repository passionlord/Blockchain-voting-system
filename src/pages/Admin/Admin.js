import React from "react";
import "./Admin.css";
import { Formik, Form } from "formik";
// import TextField from "./TextField";
// import * as Yup from "yup";

const Admin = () => {
  // const validate = Yup.object({
  //   firstName: Yup.string()
  //     .max(15, "must be 15 characters or less")
  //     .required("required"),
  //   lastName: Yup.string()
  //     .max(20, "must be 20 characters or less")
  //     .required("required"),
  //   email: Yup.string().email("Email is invalid").required("Email is required"),
  //   contact: Yup.string()
  //     .max(10, "must be 10 numbers")
  //     .required("number is required"),
  //   address: Yup.string()
  //     .max(40, "must be 40 characters or less")
  //     .required("required"),
  // });

  return (
    <section id="pageItems">
      <div className="navPanel">
        <h2 className="h2navPanel"> NAVIGATION PANEL</h2>
        <div className="imgAndButton">
          <img
            className="navigationImage"
            src="/images/navigationImage.png"
            alt=""
            width="120"
          ></img>
          <button className="addVoters">Add Voters</button>
          <button className="addCandidate">Add Candidate</button>
        </div>
      </div>
      <div className="inputDetails">
        <p className="voterTitle" color="#dcb814">
          Voter details
        </p>

        {/* <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            contact: "",
          }}
          validationSchema={validate}
        >
          {(formik) => (
            <div>
              {console.log(formik.values)}
              <Form className="row g-5 form">
                <div className="col-auto">
                  <TextField label="First Name" name="firstName" type="text" />
                </div>
                <div className="col-auto">
                  <TextField label="last Name" name="lastName" type="text" />
                </div>
                <div className="col-auto">
                  <TextField label="Email" name="email" type="email" />
                </div>
                <div className="col-auto">
                  <TextField label="contact" name="contact" type="text" />
                </div>
                <div className="col-auto">
                  <TextField
                    className="addressCol"
                    label="Address"
                    name="address"
                    type="text"
                  />
                </div>
              </Form>
            </div>
          )}
        </Formik> */}
      </div>
    </section>
  );
};

export default Admin;
