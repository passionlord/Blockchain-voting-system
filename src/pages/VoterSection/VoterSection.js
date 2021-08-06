import React from "react";
import "./VoterSection.css";
import { Link } from "react-router-dom";

const VoterSection = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-EXTC</p>
            </div>
            <div className="col-1 image">
              <img src="/images/avatar.png" width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Shraddha Tiwari</p>
            </div>
            <div className="col-3 buttonCol">
              <Link to="/VoterSuccessful">
                <button type="button">VOTE</button>
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
              <img src="/images/avatar.png" width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Fhaiyaz khan</p>
            </div>
            <div className="col-3 buttonCol">
              <button type="button">VOTE</button>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-COMPS</p>
            </div>
            <div className="col-1 image">
              <img src="/images/avatar.png" width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Vighnesh Raikar</p>
            </div>
            <div className="col-3 buttonCol">
              <button type="button">VOTE</button>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-IT</p>
            </div>
            <div className="col-1 image">
              <img src="/images/avatar.png" width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Shraddha Tiwari</p>
            </div>
            <div className="col-3 buttonCol">
              <button type="button">VOTE</button>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-EXTC</p>
            </div>
            <div className="col-1 image">
              <img src="/images/avatar.png" width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Prankali Pawar</p>
            </div>
            <div className="col-3 buttonCol">
              <button type="button">VOTE</button>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-3 departmentCol">
              <p className=" department">TE-EXTC</p>
            </div>
            <div className="col-1 image">
              <img src="/images/avatar.png" width="80px" alt=""></img>
            </div>
            <div className="col-4">
              <p className="name">Shraddha Tiwari</p>
            </div>
            <div className="col-3 buttonCol">
              <button type="button">VOTE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoterSection;
