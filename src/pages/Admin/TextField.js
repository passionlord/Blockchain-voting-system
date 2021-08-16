import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.css";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="fieldInput ">
      <label htmlFor={field.name}>{label}</label>
      <div>
        <input
          className={'${meta.touched && meta.error && "is-invalid"}'}
          {...field}
          {...props}
        />
        <ErrorMessage name={field.name} className="error" />
      </div>
    </div>
  );
};

export default TextField;
