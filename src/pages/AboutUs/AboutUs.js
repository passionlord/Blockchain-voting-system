import "./AboutUs.css";
import avatar from "../../images/avatar.png";

const AboutUs = () => {
  return (
    <section transition={{ type: "spring", stiffness: 100 }} id="about">
      {/* people-1 */}
      <div className="aboutUs">
        <div className="imageIcons">
          <img src={avatar} alt="" width="180px" height="180px"></img>
          <div className="iconBox">
            <a href="www.facebook.com" className="">
              <img
                src="https://img.icons8.com/color/35/000000/facebook-new.png"
                alt=""
              />
              <a href="http://www.linkedin.com" className="">
                <img
                  src="https://img.icons8.com/color/35/000000/linkedin.png"
                  alt=""
                />
              </a>
            </a>
          </div>
        </div>
        <div className="details">
          <p className="name">SHRADDHA TIWARI</p>
          <p className="description">
            Website Content writer & <br></br>Research paper Analyst{" "}
          </p>
          <p className="contact">+91 98663663</p>
        </div>
      </div>

      {/* people-2 */}
      <div className="aboutUs">
        <div className="details">
          <p className="name">VIGHNESH RAIKAR</p>
          <p className="description">UI/UX Designer (Frontend Developer)</p>
          <p className="contact">+91 98663663</p>
        </div>
        <div className="imageIcons1">
          <div className="iconBox1">
            <a href="www.facebook.com" className="">
              <img
                src="https://img.icons8.com/color/35/000000/facebook-new.png"
                alt=""
              />
              <a href="http://www.linkedin.com" className="">
                <img
                  src="https://img.icons8.com/color/35/000000/linkedin.png"
                  alt=""
                />
              </a>
            </a>
          </div>
          <img src={avatar} alt="" width="180px" height="180px"></img>
        </div>
      </div>

      {/* people-3 */}
      <div className="aboutUs">
        <div className="imageIcons">
          <img src={avatar} alt="" width="180px" height="180px"></img>
          <div className="iconBox">
            <a href="www.facebook.com" className="">
              <img
                src="https://img.icons8.com/color/35/000000/facebook-new.png"
                alt=""
              />
              <a href="http://www.linkedin.com" className="">
                <img
                  src="https://img.icons8.com/color/35/000000/linkedin.png"
                  alt=""
                />
              </a>
            </a>
          </div>
        </div>
        <div className="details">
          <p className="name">FAIYAZ KHAN</p>
          <p className="description">Backend Developer</p>
          <p className="contact">+91 98663663</p>
        </div>
      </div>

      {/* people-4 */}
      <div className="aboutUs">
        <div className="details">
          <p className="name">PRANJALI PAWER</p>
          <p className="description">
            Content Writer & <br /> Assistant research paper <br /> Analyst
          </p>
          <p className="contact">+91 98663663</p>
        </div>
        <div className="imageIcons1">
          <div className="iconBox1">
            <a href="www.facebook.com" className="">
              <img
                src="https://img.icons8.com/color/35/000000/facebook-new.png"
                alt=""
              />
              <a href="http://www.linkedin.com" className="">
                <img
                  src="https://img.icons8.com/color/35/000000/linkedin.png"
                  alt=""
                />
              </a>
            </a>
          </div>
          <img src={avatar} alt="" width="180px" height="180px"></img>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
