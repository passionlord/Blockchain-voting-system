import React from "react";
import "./VoterSection.css";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import Popup from "./Popup";
import { useState } from "react";
import CandidateDetails from "./CandidateDetails";

const VoterSection = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <section>
      <div className="wrapper">
        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-EXTC</p>
            </div>
            <div className="col-1 image">
              <Link onClick={() => setButtonPopup(true)}>
                <img src={avatar} width="80px" alt=""></img>
              </Link>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* candidate details */}
                <CandidateDetails />
              </Popup>
            </div>
            <div className="col-4">
              <Link onClick={() => setButtonPopup(true)}>
                <p className="name">Shraddha Tiwari</p>
              </Link>
            </div>
            <div className="col-3 buttonCol">
              <Link to="/VoteSuccessful">
                <button className="button" type="button">
                  VOTE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-COMPS</p>
            </div>
            <div className="col-1 image">
              <img src={avatar} width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Fhaiyaz khan</p>
            </div>
            <div className="col-3 buttonCol">
              <Link to="/VoteSuccessful">
                <button className="button" type="button">
                  VOTE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-COMPS</p>
            </div>
            <div className="col-1 image">
              <img src={avatar} width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Vighnesh Raikar</p>
            </div>
            <div className="col-3 buttonCol">
              <Link to="/VoteSuccessful">
                <button className="button" type="button">
                  VOTE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-IT</p>
            </div>
            <div className="col-1 image">
              <img src={avatar} width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Shraddha Tiwari</p>
            </div>
            <div className="col-3 buttonCol">
              <Link to="/VoteSuccessful">
                <button className="button" type="button">
                  VOTE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-EXTC</p>
            </div>
            <div className="col-1 image">
              <img src={avatar} width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Prankali Pawar</p>
            </div>
            <div className="col-3 buttonCol">
              <Link to="/VoteSuccessful">
                <button className="button" type="button">
                  VOTE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-EXTC</p>
            </div>
            <div className="col-1 image">
              <img src={avatar} width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Shraddha Tiwari</p>
            </div>
            <div className="col-3 buttonCol">
              <Link to="/VoteSuccessful">
                <button className="button" type="button">
                  VOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoterSection;
