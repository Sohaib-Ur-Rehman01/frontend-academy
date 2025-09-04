// MobileMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../components/css/topSection.css";

const MobileMenu = ({
  navLinks = [],
  featureLinks = [],
  buttons = [],
  contactInfo = null,
}) => {
  return (
    <div className="mobile-menu">
      {/* Nav Links */}
      <div className="mob-nav-links">
        {featureLinks.length > 0 && (
          <div className="feature-div">
            <Link to="/features">Features</Link>
            <hr className="divider-menu-for-sm-devices" />
            <div className="feature-menu">
              {featureLinks.map((flink, idx) => (
                <Link key={idx} to={flink.to}>
                  {flink.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {navLinks.map((link, idx) => (
          <Link key={idx} to={link.to}>
            {link.label}{" "}
            {link.isNew && <span className="top-hero-new">NEW</span>}
          </Link>
        ))}
      </div>

      {/* Buttons + Contact */}
      <div className="mob-nav-btn-container">
        {buttons.map((btn, idx) => (
          <button key={idx} className={btn.className}>
            {btn.label}
          </button>
        ))}

        {contactInfo && (
          <div className="contact-supp-sm">
            <span className="con-sm">Contact:</span>
            <Link to={`mailto:${contactInfo.email}`} className="email">
              {contactInfo.email}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
