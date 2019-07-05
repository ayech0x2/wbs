import React from "react";

import "./footer.scss";
import { Link } from "react-router-dom";
import ScrollMouse from "../svg/ScrollMouse";
import InstagramLogo from "../svg/InstagramLogo";
import FacebookLogo from "../svg/FacebookLogo";
import LinkedInLogo from "../svg/LinkedInLogo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item contact">
        <Link to="/get-in-touch">Start a project?</Link>
      </div>
      <div className="footer-item scroll-button">
        <ScrollMouse />
      </div>
      <div className="footer-item icons">
        <InstagramLogo />
        <FacebookLogo />
        <LinkedInLogo />
      </div>
    </footer>
  );
};
export default Footer;
