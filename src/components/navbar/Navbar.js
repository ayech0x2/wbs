import React from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../svg/Logo";

import "./navbar.scss";

const Navbar = props => {
  const linkClicked = (e, pathname) => {
    if (props.location.pathname === pathname) {
    }
  };
  return (
    <div className="navbar">
      <div className="nav-section brand">
        <div className="nav-link logo ">
          <Logo />
        </div>
      </div>
      <div className="nav-section links">
        <Link
          onClick={e => linkClicked(e, "/")}
          className={`nav-link href ${
            props.location.pathname === "/" ? "active" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={linkClicked}
          className={`nav-link href ${
            props.location.pathname === "/what-we-do" ? "active" : ""
          }`}
          to="/what-we-do"
        >
          What we do
        </Link>
        <Link
          onClick={linkClicked}
          className={`nav-link href ${
            props.location.pathname === "/who-are-we" ? "active" : ""
          }`}
          to="/who-are-we"
        >
          Who are we
        </Link>
        <Link
          onClick={linkClicked}
          className={`nav-link href ${
            props.location.pathname === "/get-in-touch" ? "active" : ""
          }`}
          to="/get-in-touch"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
