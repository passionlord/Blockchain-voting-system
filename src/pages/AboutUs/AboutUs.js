import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="wrap">
      <div className="detailsContainer">
        <div className="imageIcon">
          <img className="avatar" src="/images/avatar.png" alt=""></img>
          <div className="iconBoxWrap">
            <div className="iconBox">
              <a href="www.facebook.com" className="">
                <img
                  src="https://img.icons8.com/color/38/000000/facebook-new.png"
                  alt=""
                />
                <a href="http://www.linkedin.com" className="">
                  <img
                    src="https://img.icons8.com/color/38/000000/linkedin.png"
                    alt=""
                  />
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="details">
          <p className="name">SHRADDHA TIWARI</p>
          <p className="description">
            Website Content writer & <br></br> research paper Analyst
          </p>
          <p className="contact">+91 98663663</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
