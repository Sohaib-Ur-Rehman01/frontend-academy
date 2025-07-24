import React, { useMemo } from "react";
import "./css/topSection.css";
import { CiSearch } from "react-icons/ci";
import quote from "../assets/quote.svg";

// Array of background images (add your own image URLs)
const bgImages = [
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-kraman.webp",
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-primeagen.webp",
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-misko-hevery.webp",
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-techson.webp",
];

export const TopSection = () => {
  // Pick a random image on each render
  const bgImage = useMemo(() => {
    const idx = Math.floor(Math.random() * bgImages.length);
    return bgImages[idx];
  }, []);

  return (
    <header
      className="top-hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <nav className="top-hero-navbar">
        <span className="top-hero-logo">
          Frontend<span className="top-hero-logo-red">Masters</span>
        </span>
        <div className="top-hero-nav-links">
          <div>
            <a href="#">Features</a>
            <div className="features-dropdown">
              <a href="#">All Features</a>
              <a href="#">Learning Paths</a>
              <a href="#">Interactive Courses</a>
            </div>
          </div>
          <a href="#">Learn</a>
          <a href="#">Courses</a>
          <a href="#">
            Tutorials <span className="top-hero-new">NEW</span>
          </a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
        </div>
        <div className="top-hero-nav-actions">
          <a href="#" className="search">
            <span className="search"></span>
            <CiSearch />
          </a>
          <a href="#" className="top-hero-join-btn">
            Join Now
          </a>
          <a href="#" className="top-hero-login-btn">
            Login
          </a>
        </div>
      </nav>
      <div className="hero-wrapper">
        <div className="top-hero-content">
          <h3 className="top-hero-subtitle">
            In-Depth Frontend &amp; Fullstack Courses
          </h3>
          <h1 className="top-hero-title">
            Your Path to Senior
            <br />
            Developer and Beyond
          </h1>
          <div className="top-hero-btns">
            <a href="#" className="top-hero-trial-btn">
              Start a Free 5-day Trial
            </a>
            <a href="#" className="top-hero-browse-btn">
              Browse Our Courses
            </a>
          </div>
        </div>
      </div>
      <div className="top-hero-quote-box">
        <div className="top-hero-quote-icon">
          <img src={quote} alt="" />
        </div>
        <div className="para">
          Teaching forces you to know something in every excruciating detail.
          That's knowledge I get to keep forever and has paid off in my career.
          <div className="top-hero-quote-author">
            <span className="top-hero-quote-name">Steve Kinney</span>
            <span className="top-hero-quote-company">Temporal</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopSection;
