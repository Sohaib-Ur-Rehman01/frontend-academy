import React, { useMemo, useState, useEffect } from "react";
import "./css/topSection.css";
import { CiSearch } from "react-icons/ci";
import quote from "../assets/quote.svg";
import logo from "../assets/frontendMasterlogo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

// Array of background images (add your own image URLs)
const bgImages = [
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-kraman.webp",
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-primeagen.webp",
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-misko-hevery.webp",
  "https://static.frontendmasters.com/assets/fm/med/home/heros/hero-techson.webp",
];

export const TopSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pick a random image on each render
  const bgImage = useMemo(() => {
    const idx = Math.floor(Math.random() * bgImages.length);
    return bgImages[idx];
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top-main-con">
      <header
        className="top-hero-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* res-navbar for tablet and medium screen devices start */}
        <div className="res-nav">
          <div className="res-img res-sec-container">
            <div className="res-nav-image">
              <img src={logo} alt="" className="res-image" />
            </div>
            <div className="res-navLinks">
              <a href="#">Features</a>
              <div className="features-dropdown">
                <a href="#">All Features</a>
                <a href="#">Learning Paths</a>
                <a href="#">Interactive Courses</a>
              </div>

              <a href="#">Learn</a>
              <a href="#">Courses</a>
              <a href="#">
                Tutorials <span className="top-hero-new">NEW</span>
              </a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
            </div>
          </div>
          <div className="loginSignUpSearchBar">
            <div className="searchbar">
              <CiSearch />
            </div>
            <div className="joinNow">Join Now</div>
            <div className="login">Login</div>
          </div>
        </div>
        {/* res-navbar for tablet and medium screen devices end */}
        {/* res-navbar for mobiles and small screen devices start */}
        <div className="small-nav">
          <div className="sm-img">
            <img src={logo} alt="" className="res-image" />
          </div>
          <div className="searchAndToggleIcon">
            <div className="searchbar">
              <CiSearch />
            </div>

            <div className="toggle" onClick={toggleMenu}>
              {isMenuOpen ? <MdClose /> : <CiMenuBurger />}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#">Features</a>
            <a href="#">Learn</a>
            <a href="#">Courses</a>
            <a href="#">
              Tutorials <span className="top-hero-new">NEW</span>
            </a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <div className="loginSignUpSearchBar">
              <div className="joinNow">Join Now</div>
              <div className="login">Login</div>
              <div className="contact-supp-sm">
                Contact Support:
                <a href="#" className="email">
                  support@frontendmasters.com
                </a>
              </div>
            </div>
          </div>
        )}

        {/* res-navbar for mobiles and small screen devices end */}
        <div className="nav-main-container">
          <div className="logoAndNavLinks">
            <div className="imag">
              <img src={logo} alt="" className="image" />
            </div>
            <div className="navLinks">
              <a href="#">Features</a>
              <div className="features-dropdown">
                <a href="#">All Features</a>
                <a href="#">Learning Paths</a>
                <a href="#">Interactive Courses</a>
              </div>

              <a href="#">Learn</a>
              <a href="#">Courses</a>
              <a href="#">
                Tutorials <span className="top-hero-new">NEW</span>
              </a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
            </div>
          </div>
          <div className="loginSignUpSearchBar">
            <div className="searchbar">
              <CiSearch />
            </div>
            <div className="joinNow">Join Now</div>
            <div className="login">Login</div>
          </div>
        </div>

        <div className="hero-content-section">
          <div className="hero-heading">
            <h2>In-Depth Frontend & Fullstack Courses</h2>
            <h1>
              Your Path to Senior <br /> Developer and Beyond
            </h1>
          </div>
          <div className="hero-buttons">
            <div className="btnforfreeTrial">
              <button>Start a Free 5-day Trial</button>
            </div>
            <div className="btnforBrowseCourses">
              <button>Browse Our Courses</button>
            </div>
          </div>
        </div>

        <div className="quote-main-container">
          <div className="quote-image">
            <img src={quote} alt="" />
          </div>
          <div className="para-content">
            <p>
              If you understand how CSS fundamentally works, you can solve
              problems easily. But people just throw things at the wall hoping
              they stick, instead of learning the core concepts.
            </p>
            <br />
            <p>
              Kevin PowellYouTube <span>YouTube</span>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopSection;
