import React from "react";
import "../AdminLogin/AdminLogin.css";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const VoterLogin = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(data: values) => console.log(data)}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => {
        console.log(errors);
        return (
          <section className="adminFormContainer">
            <section id="section">
              <div className="contentBx">
                <div className="formBx">
                  <h2>Voter Login</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="inputBx">
                      <label htmlFor="email">Email Id</label>
                      <input
                        onChange={handleChange}
                        name={"email"}
                        onBlur={handleBlur}
                        value={values.email}
                        className="input"
                        type="email"
                        placeholder="enter e-mail"
                      ></input>
                      {errors.email && touched.email ? (
                        <div className="errorsEmail">{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="inputBx">
                      <label htmlFor="password">Password</label>
                      <input
                        onChange={handleChange}
                        name={"password"}
                        onBlur={handleBlur}
                        value={values.password}
                        className="input"
                        type="password"
                        placeholder="enter password"
                      ></input>
                      {errors.password && touched.password ? (
                        <div className="errorsPassword">{errors.password}</div>
                      ) : null}
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
      }}
    </Formik>
  );
};

export default VoterLogin;
