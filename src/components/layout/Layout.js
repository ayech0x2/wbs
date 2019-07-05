import React, { useEffect } from "react";
import { connect } from "react-redux";
import Routes from "../Routes";
import Navbar from "../navbar/Navbar";

import "./layout.scss";
import Footer from "../footer/Footer";

const Layout = props => {
  return (
    <div className="layout">
      <Navbar />
      <div className="components">
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default connect(null)(Layout);
