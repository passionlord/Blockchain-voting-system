import React, { useState } from "react";
import "./CandidateDetails.css";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";
import FormikForm from "./FormikForm";

const CandidateDetails = () => {
  const [fields, updateFields] = useState({
    department: "EXTC",
    year: "TE",
    address:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue fringilla, eleifend sem nec, porta velit. Aliquam porta libero vitae libero viverra lacinia.",
    pincode: "123456",
    email: "admin@example.com",
    mobile_no: "012345678",
    promises:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue fringilla, eleifend sem nec, porta velit. Aliquam porta libero vitae libero viverra lacinia. Praesent mollis, arcu sed porttitor iaculis, quam est aliquam lacus, nec varius ligula mi sit amet sem. Sed ut lorem at metus tincidunt mattis vel ac quam.",
  });

  return (
    <div className="details">
      <div className="headings">
        <img className="headingsImg" src={logo} alt=""></img>
        <h1 className="headingsH1">CANDIDATE DETAILS</h1>
      </div>

      <div className="profile">
        <div className="profileIcon">
          <img src={avatar} alt=""></img>
          <p>Shraddha Tiwari</p>
          <button>VOTE</button>
        </div>
        <div className="profileDetails">
          <div className="formDetails">
            <FormikForm fields={fields} updateFields={updateFields} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
