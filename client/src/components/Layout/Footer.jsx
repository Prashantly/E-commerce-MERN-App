import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center footer-title">
        &copy; Copyright 2020-2023 - S-MART. All rights reserved.
      </h4>
      <div className="text-center footer-links">
        <Link to="/about" className="footer-link">
          About
        </Link>
        <span className="footer-link-divider">|</span>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
        <span className="footer-link-divider">|</span>
        <Link to="/policy" className="footer-link">
          Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
