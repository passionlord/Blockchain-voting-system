import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <NavBar></NavBar>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
