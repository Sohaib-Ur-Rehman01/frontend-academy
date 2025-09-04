import "../components/css/featuresSection.css";
import logo from "../assets/frontendMasterlogo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import feactureSectionImage from "../assets/features.webp";
import { IoMdArrowDropright } from "react-icons/io";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import qualitySectionImage from "../assets/qualitysectionlearning-paths.webp";
import DemoSectionImage from "../assets/player.webp";
import DashboarImage from "../assets/dashboard.webp";
import WorkshopImage from "../assets/workshops.webp";
import ProfileImage from "../assets/profile.png";
import micorsoft from "../assets/microsoft.svg";
import netflix from "../assets/netflix.svg";
import strip from "../assets/stripe.svg";
import spotify from "../assets/spotify.svg";
import MobileMenu from "./mobilenavbar.jsx";
import AlwaysOpenExample from "./accordion.jsx";

export const FeatureSectionNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="feat-main-con">
        <div className="feature-main-container">
          {/* Navbar section  start  */}
          <div className="featu-nav-m-div">
            <div className="feature-sec-navbar">
              <div className="nav-con-img-and-searchlogin-sec">
                <div className="logo-nav-sec">
                  <div className="logo-img">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div className="feature-nav-link">
                    <div className="feat-res-navLinks">
                      <Link to="/features">Features</Link>

                      <Link to="/learn">Learned</Link>
                      <Link to="/courses">Courses</Link>
                      <Link to="/tutorials">
                        Tutorials <span className="top-hero-new">NEW</span>
                      </Link>
                      <Link to="/blog">Blog</Link>
                      <Link to="/pricing">Pricing</Link>
                    </div>
                  </div>
                </div>
                <div className="search-login-joinNow-sec">
                  <div
                    className="feature-searchbar"
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <CiSearch />
                  </div>
                  <div className="feature-joinNow">Join Now</div>
                  <div className="feature-login">Login</div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-con-img-and-searchlogin-sec-responsive">
            <div className="logo-nav-sec">
              <div className="logo-img">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="search-login-joinNow-sec">
                <div
                  className="feature-searchbar"
                  onClick={() => setIsModalOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <CiSearch />
                </div>
                <div className="feature-joinNow">Join Now</div>
                <div className="feature-login">Login</div>
              </div>
            </div>
            <div className="feature-nav-link">
              <div className="feat-res-navLinks">
                <Link to="/features">Features</Link>

                <Link to="#">Learn</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/tutorials">
                  Tutorials <span className="top-hero-new">NEW</span>
                </Link>
                <Link to="/blog">Blog</Link>
                <Link to="/pricing">Pricing</Link>
              </div>
            </div>
          </div>

          {/* res-feature-navbar for mobiles and small screen devices start */}
          <div className="featu-nav-m-div-forSmallDevicesnavbar">
            <div className="nav-con-img-and-searchlogin-secnavbar">
              <div className="logo-nav-sec-smallDevice">
                <div className="logo-img">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="search-login-joinNow-sec-smallDevice">
                <div
                  className="feature-searchbar"
                  onClick={() => setIsModalOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <CiSearch />
                </div>
                {/* Burger / Close Toggle Icon */}
                <div
                  className="feature-searchbar"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  style={{ cursor: "pointer" }}
                >
                  {isMenuOpen ? (
                    <MdClose size={28} />
                  ) : (
                    <CiMenuBurger size={28} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* res-feature-navbar for mobiles and small screen devices end */}
          {/* Navbar section end */}
        </div>

        {isMenuOpen && (
          // <div className="mobile-menu">
          //   <Link to="/features">Features</Link>
          //   <hr className="divider-menu" />
          //   <div className="feature-menu">
          //     <Link to="#">Overview</Link>
          //     <Link to="#">For Teams</Link>
          //     <Link to="#">For Enterprises</Link>
          //   </div>
          //   <Link to="/learn">Learn</Link>
          //   <Link to="/courses">Courses</Link>
          //   <Link to="/tutorials">
          //     Tutorials <span className="top-hero-new">NEW</span>
          //   </Link>
          //   <Link to="/blog">Blog</Link>
          //   <Link to="/pricing">Pricing</Link>
          //   <div className="loginSignUpSearchBar">
          //     <div className="joinNow">Join Now</div>
          //     <div className="login">Login</div>
          //     <div className="contact-supp-sm">
          //       <span className="con-sm-Devices">Contact:</span>
          //       <Link to="#" className="email">
          //         support@frontendmasters.com
          //       </Link>
          //     </div>
          //   </div>
          // </div>
          <MobileMenu
            navLinks={[
              { to: "/learn", label: "Learn" },
              { to: "/courses", label: "Courses" },
              { to: "/tutorials", label: "Tutorials", isNew: true },
              { to: "/blog", label: "Blog" },
              { to: "/pricing", label: "Pricing" },
            ]}
            featureLinks={[
              { to: "#", label: "Overview" },
              { to: "#", label: "For Teams" },
              { to: "#", label: "For Enterprises" },
            ]}
            buttons={[
              { label: "Join Now", className: "joinNow" },
              { label: "Login", className: "login" },
            ]}
            contactInfo={{ email: "support@frontendmasters.com" }}
          />
        )}
        {isModalOpen && (
          <div className="search-modal-main-container">
            <div className="modal-container">
              <div className="search-input-icon-and-btn">
                <div className="modaal-search-icon">
                  <CiSearch size={25} className="modal-search-icon" />
                </div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Search"
                    className="modal-input"
                  />
                </div>
                <div className="esc-btn">
                  <button onClick={closeModal}>ESC</button>
                </div>
              </div>
              <hr className="modal-hr-line" />
              <div className="modal-content-container">
                <div className="popular-languages">
                  <h4 className="modal-heading">Popular Languages</h4>
                  <ul className="modal-ul">
                    <li>Javascript</li>
                    <li>Javascript</li>
                    <li>Javascript</li>
                    <li>Javascript</li>
                  </ul>
                </div>
                <div className="popular-terms">
                  <h4 className="modal-heading">Popular Terms</h4>
                  <ul>
                    <li>Javascript</li>
                    <li>Javascript</li>
                    <li>Javascript</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div
              className="search-modal-overlay"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="search-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="search-bar-top">
                  <input
                    type="text"
                    placeholder="<CiSearch /> Search"
                    className="search-input"
                  />
                  <span className="esc-key" onClick={closeModal}>
                    ESC
                  </span>
                </div>
                <hr />
                <div className="search-suggestions">
                  <div className="suggest-col">
                    <h4>Popular Languages</h4>
                    <ul>
                      <li>
                        <span>•</span>

                        <span className="lang">JavaScript</span>
                      </li>
                      <li>
                        <span>•</span> <span className="lang">TypeScript</span>
                      </li>
                      <li>
                        <span>•</span> <span className="lang">CSS</span>
                      </li>
                      <li>
                        <span>•</span> <span className="lang">HTML</span>
                      </li>
                    </ul>
                  </div>
                  <div className="suggest-col">
                    <h4>Popular Terms</h4>
                    <ul>
                      <li>
                        <span>•</span> <span className="lang">React</span>
                      </li>
                      <li>
                        <span>•</span> <span className="lang">Node</span>
                      </li>
                      <li>
                        <span>•</span> <span className="lang">Redux</span>
                      </li>
                      <li>
                        <span>•</span> <span className="lang">hooks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};
export const FeatureHeroSection = () => {
  return (
    <>
      <div className="feature-hero-section-main-container">
        <div className="featu-hero-lg-sc-resp">
          <div className="feature-hero-section-img-and-leaning-section">
            <div className="img-feature-hero-section">
              <img
                src={feactureSectionImage}
                alt=""
                className="feature-hero-section-image"
              />
            </div>
            <div className="feature-hero-section-learning-section">
              <div className="hero-section-learning-heading">
                <h1>Why Frontend Masters?</h1>
              </div>
              <div className="feature-hero-section-learning-p">
                <p>
                  All of our courses are taught by active practitioners using
                  the skills they teach at top companies you know like Netflix,
                  Spotify, Google, and Stripe. In addition, our courses are
                  regularly updated to keep pace with the latest evolutions to
                  ensure you're learning industry best practices and the latest
                  techniques.
                </p>
              </div>
              <div className="feature-hero-section-learning-button-div">
                <div className="browsebutton">
                  <button>Browser Our Courses</button>
                </div>
                <div className="learningPaths">
                  <button>View Learning Paths</button>
                </div>
              </div>
              <div className="feature-hero-section-learning-button-p-and-a">
                <p>Not sure where to get started?</p>
                <a href="#">
                  <div className="arroww">
                    <div>Try the learning path quiz </div>
                    <div>
                      <IoMdArrowDropright size={30} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="feature-hero-section-feature-items">
            <div className="featu-resp-icons">
              <div class="feature-item">
                <div class="icon-num">200+</div>
                <div class="text">In-Depth Courses</div>
              </div>
              <div class="feature-item">
                <div class="icon-num">21</div>
                <div class="text">Learning Paths</div>
              </div>
            </div>
            <div className="featu-resp-icons">
              <div class="feature-item">
                <div class="icon--">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="74"
                    viewBox="0 0 75 74"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2103_1364)">
                      <path
                        d="M48.5121 55.4999C48.2499 55.5021 47.9907 55.4419 47.7553 55.3239l-9.5886-4.6294-9.5886 4.6294C28.2925 55.4634 27.9753 55.5216 27.66 55.4926 27.3446 55.4635 27.0428 55.3482 26.7864 55.1587 26.5317 54.9682 26.332 54.7113 26.2081 54.415 26.0842 54.1186 26.0408 53.7937 26.0823 53.4743l1.3764-10.7422-7.3112-7.8691C19.9302 34.6284 19.7789 34.3384 19.7095 34.0235 19.6402 33.7085 19.6552 33.3803 19.7532 33.0734S20.0285 32.4922 20.2664 32.2794C20.5042 32.0666 20.7939 31.9231 21.105 31.8641L31.5455 29.878l5.0759-9.5176C36.7878 20.0965 37.0165 19.8794 37.2865 19.7291 37.5565 19.5788 37.8591 19.5 38.1667 19.5S38.7769 19.5788 39.0469 19.7291C39.3169 19.8794 39.5456 20.0965 39.712 20.3604l5.0759 9.5176 10.4405 1.9861C55.5394 31.9231 55.8291 32.0666 56.067 32.2794 56.3049 32.4922 56.4821 32.7665 56.5801 33.0734S56.6932 33.7085 56.6238 34.0235C56.5545 34.3384 56.4031 34.6284 56.1858 34.863l-7.3041 7.8691 1.3764 10.7422C50.2903 53.7287 50.2687 53.9871 50.1947 54.2323 50.1208 54.4774 49.9963 54.7036 49.8295 54.8955 49.6628 55.0874 49.4577 55.2407 49.228 55.3449 48.9983 55.4492 48.7494 55.502 48.4981 55.4999H48.5121zM38.1667 46.8803C38.4287 46.8799 38.6875 46.94 38.9235 47.0563l7.4238 3.5915-1.056-8.3216C45.2574 42.0621 45.2815 41.7936 45.3618 41.5401 45.4422 41.2867 45.5768 41.0547 45.7559 40.8609l5.6568-6.1056-8.0962-1.5408C43.0599 33.1655 42.8171 33.0589 42.6059 32.9024 42.3946 32.7458 42.2201 32.5433 42.0951 32.3095l-3.9284-7.3339-3.9319 7.3698C34.1097 32.5792 33.9353 32.7818 33.724 32.9383 33.5127 33.0948 33.27 33.2015 33.0133 33.2504l-8.0961 1.5408 5.6567 6.1056C30.7531 41.0906 30.8877 41.3226 30.968 41.5761 31.0484 41.8295 31.0725 42.098 31.0386 42.3621l-1.056 8.3216 7.4238-3.5915C37.6414 46.9667 37.9015 46.8979 38.1667 46.891V46.8803z"
                        fill="url(#paint0_linear_2103_1364)"
                      ></path>
                      <path
                        d="M7.5374 47.4999C7.28542 47.5021 7.03591 47.4502 6.80571 47.3478 6.5755 47.2454 6.36997 47.0949 6.20297 46.9063 6.03597 46.7178 5.91139 46.4957 5.83764 46.255 5.76389 46.0143 5.74268 45.7606 5.77545 45.511l1.08536-8.2515-5.71223-6.0408C.931078 30.989.779534 30.705.70988 30.3966.640225 30.0881.655031 29.7666.752742 29.4659.850452 29.1651 1.02746 28.8962 1.26516 28.6874 1.50285 28.4786 1.79247 28.3376 2.10356 28.2793l8.19654-1.5489 3.9679-7.3116C14.4197 19.1404 14.6438 18.908 14.9168 18.7463 15.1897 18.5846 15.5012 18.4995 15.8186 18.5 16.1349 18.4998 16.4455 18.5846 16.7177 18.7457 16.9899 18.9067 17.2137 19.138 17.3655 19.4153l3.7001 6.7941C21.2895 26.6192 21.3411 27.1012 21.2093 27.5491 21.0775 27.997 20.7729 28.3743 20.3626 28.5979 19.9523 28.8215 19.4699 28.8731 19.0215 28.7414 18.5731 28.6097 18.1955 28.3055 17.9716 27.8956l-2.153-3.9462-2.8192 5.21c-.1251.2302-.3002.429699999999997-.5123.5838C12.2749 29.8973 12.031 30.0021 11.7731 30.05L5.9305 31.1448l4.0842 4.3088C10.1951 35.6436 10.3308 35.8715 10.4119 36.1206 10.493 36.3697 10.5174 36.6337 10.4834 36.8934l-.77528 5.8683L15.0574 40.2165C15.2941 40.1039 15.5529 40.0455 15.815 40.0455 16.0772 40.0455 16.336 40.1039 16.5727 40.2165l5.2153 2.4642C22.1703 42.9027 22.455 43.26 22.5857 43.682 22.7164 44.1039 22.6836 44.5595 22.4937 44.9583 22.3039 45.3572 21.9708 45.6701 21.5607 45.8351 21.1506 46.0001 20.6934 46.005 20.2798 45.8489l-4.4577-2.1121-7.52354 3.5977C8.06037 47.4457 7.8003 47.5022 7.5374 47.4999zm60.2586.0C67.5325 47.5 67.2724 47.4411 67.0348 47.3274l-7.52-3.573L55.0571 45.8665C54.8465 45.9889 54.6127 46.0662 54.3706 46.0937 54.1286 46.1212 53.8834 46.0982 53.6506 46.0263 53.4179 45.9543 53.2026 45.8349 53.0184 45.6756 52.8342 45.5163 52.6851 45.3205 52.5804 45.1007 52.4758 44.8809 52.4179 44.6418 52.4105 44.3986 52.4031 44.1553 52.4462 43.9131 52.5372 43.6873 52.6282 43.4616 52.7651 43.2571 52.9392 43.0869 53.1134 42.9166 53.321 42.7843 53.5489 42.6983L58.7642 40.2341C59.0009 40.1215 59.2597 40.0631 59.5219 40.0631 59.784 40.0631 60.0428 40.1215 60.2795 40.2341l5.3493 2.5452L64.8535 36.911C64.8195 36.6513 64.8439 36.3873 64.925 36.1382 65.0061 35.8891 65.1418 35.6612 65.3222 35.4712L69.4064 31.1624l-5.8426-1.0948C63.3059 30.0197 63.062 29.9149 62.8498 29.7608 62.6377 29.6067 62.4626 29.4072 62.3375 29.177l-2.8192-5.21-2.1495 3.9462C57.1449 28.3231 56.7673 28.6273 56.3189 28.759S55.3881 28.8391 54.9778 28.6155C54.5675 28.3919 54.263 28.0146 54.1311 27.5667 53.9993 27.1187 54.051 26.6368 54.2748 26.227l3.7001-6.7941C58.1267 19.1556 58.3505 18.9243 58.6227 18.7633 58.8949 18.6022 59.2055 18.5174 59.5219 18.5176 59.8386 18.5177 60.1494 18.6031 60.4217 18.7648 60.6939 18.9265 60.9175 19.1585 61.0689 19.4364L65.0332 26.7304l8.1966 1.5348C73.5409 28.3236 73.8305 28.4645 74.0682 28.6733 74.3059 28.8821 74.4829 29.151 74.5806 29.4518 74.6783 29.7525 74.6932 30.074 74.6235 30.3825 74.5538 30.6909 74.4023 30.9749 74.1848 31.2046l-5.7299 6.0478L69.5403 45.5039C69.5731 45.7535 69.5519 46.0073 69.4781 46.248 69.4044 46.4887 69.2798 46.7108 69.1128 46.8993 68.9458 47.0878 68.7402 47.2383 68.51 47.3407 68.2798 47.4432 68.0303 47.495 67.7784 47.4929L67.796 47.4999z"
                        fill="url(#paint1_linear_2103_1364)"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2103_1364"
                        x1="19.6795"
                        y1="25.5003"
                        x2="56.6672"
                        y2="25.5018"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#c02d28"></stop>
                        <stop offset="1" stop-color="#e66225"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2103_1364"
                        x1=".69239"
                        y1="23.3335"
                        x2="74.6678"
                        y2="23.3411"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#c02d28"></stop>
                        <stop offset="1" stop-color="#e66225"></stop>
                      </linearGradient>
                      <clipPath id="clip0_2103_1364">
                        <rect
                          width="74"
                          height="74"
                          fill="#fff"
                          transform="translate(0.666687)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="text">Industry Leading Experts</div>
              </div>
              <div class="feature-item">
                <div class="icon--">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                  >
                    <path
                      d="M14.1641 52.0313C12.2202 52.0313 10.3201 51.4548 8.70385 50.3749 7.08763 49.295 5.82793 47.76 5.08406 45.9642c-.74386-1.7959-.93849-3.772-.55927-5.6784.37922-1.9065 1.31526-3.6577 2.68974-5.0322 1.37449-1.3745 3.12567-2.3105 5.03217-2.6898C14.1532 32.1846 16.1293 32.3793 17.9251 33.1231 19.721 33.867 21.2559 35.1267 22.3359 36.7429c1.0799 1.6162 1.6563 3.5164 1.6563 5.4602C23.9891 44.8088 22.9527 47.3068 21.1102 49.1493 19.2678 50.9918 16.7697 52.0282 14.1641 52.0313zm0-16.1875C12.9063 35.8438 11.6768 36.2167 10.631 36.9155 9.58519 37.6143 8.7701 38.6075 8.28877 39.7695S7.68151 42.2102 7.92689 43.4438C8.17226 44.6774 8.77793 45.8105 9.66731 46.6999 10.5567 47.5893 11.6898 48.1949 12.9234 48.4403 14.157 48.6857 15.4357 48.5598 16.5977 48.0784 17.7597 47.5971 18.7529 46.782 19.4517 45.7362 20.1505 44.6904 20.5234 43.4609 20.5234 42.2031 20.5204 40.5175 19.8494 38.9017 18.6574 37.7098c-1.1919-1.192-2.8077-1.863-4.4933-1.866z"
                      fill="url(#paint0_linear_2103_1370)"
                    ></path>
                    <path
                      d="M22.8359 65.9062H5.49219C5.0322 65.9062 4.59106 65.7235 4.2658 65.3983 3.94054 65.073 3.75781 64.6319 3.75781 64.1719V56.0781C3.76087 54.0858 4.55368 52.1759 5.96247 50.7672c1.40879-1.4088 3.31864-2.2016 5.31093-2.2047h5.7813C19.047 48.5656 20.9569 49.3584 22.3657 50.7672c1.4088 1.4087 2.2016 3.3186 2.2046 5.3109v8.0938C24.5703 64.6319 24.3876 65.073 24.0623 65.3983 23.7371 65.7235 23.2959 65.9062 22.8359 65.9062zM7.22656 62.4375H21.1016V56.0781c0-1.0733-.426400000000001-2.1026-1.1853-2.8615-.759-.759-1.7883-1.1854-2.8616-1.1854H11.2734C10.2001 52.0312 9.1708 52.4576 8.41186 53.2166 7.65293 53.9755 7.22656 55.0048 7.22656 56.0781v6.3594z"
                      fill="url(#paint1_linear_2103_1370)"
                    ></path>
                    <path
                      d="M23.4141 58.9688C23.0803 58.9694 22.7534 58.8738 22.4726 58.6933S21.9691 58.2551 21.8311 57.9511C21.6932 57.6471 21.6459 57.3098 21.6949 56.9797 21.7439 56.6495 21.8872 56.3405 22.1075 56.0897l16.1875-18.5C38.6017 37.2432 39.0334 37.0327 39.4953 37.0045 39.9571 36.9763 40.4113 37.1327 40.7578 37.4394 41.1043 37.746 41.3148 38.1778 41.343 38.6397 41.3712 39.1015 41.2148 39.5557 40.9081 39.9022l-16.1875 18.5C24.5558 58.5843 24.354 58.7291 24.1286 58.8268 23.9033 58.9245 23.6596 58.9729 23.4141 58.9688zM68.5078 11.5625H11.8516C11.3916 11.5625 10.9504 11.3798 10.6252 11.0545 10.2999 10.7293 10.1172 10.2881 10.1172 9.82812S10.2999 8.92699 10.6252 8.60174C10.9504 8.27648 11.3916 8.09375 11.8516 8.09375H68.5078C68.9678 8.09375 69.4089 8.27648 69.7342 8.60174 70.0595 8.92699 70.2422 9.36814 70.2422 9.82812S70.0595 10.7293 69.7342 11.0545C69.4089 11.3798 68.9678 11.5625 68.5078 11.5625zm0 35.8437H44.2266C43.7666 47.4062 43.3254 47.2235 43.0002 46.8983 42.6749 46.573 42.4922 46.1319 42.4922 45.6719S42.6749 44.7707 43.0002 44.4455C43.3254 44.1202 43.7666 43.9375 44.2266 43.9375H68.5078C68.9678 43.9375 69.4089 44.1202 69.7342 44.4455 70.0595 44.7707 70.2422 45.2119 70.2422 45.6719S70.0595 46.573 69.7342 46.8983C69.4089 47.2235 68.9678 47.4062 68.5078 47.4062z"
                      fill="url(#paint2_linear_2103_1370)"
                    ></path>
                    <path
                      d="M63.8828 47.4062C63.4228 47.4062 62.9817 47.2235 62.6564 46.8983 62.3312 46.573 62.1484 46.1319 62.1484 45.6719V9.82812c0-.45998.1828-.90113.507999999999996-1.22638C62.9817 8.27648 63.4228 8.09375 63.8828 8.09375 64.3428 8.09375 64.7839 8.27648 65.1092 8.60174 65.4345 8.92699 65.6172 9.36814 65.6172 9.82812V45.6719C65.6172 46.1319 65.4345 46.573 65.1092 46.8983 64.7839 47.2235 64.3428 47.4062 63.8828 47.4062zM16.4766 27.75C16.0166 27.75 15.5754 27.5673 15.2502 27.242 14.9249 26.9168 14.7422 26.4756 14.7422 26.0156V9.82812C14.7422 9.36814 14.9249 8.92699 15.2502 8.60174 15.5754 8.27648 16.0166 8.09375 16.4766 8.09375 16.9365 8.09375 17.3777 8.27648 17.703 8.60174 18.0282 8.92699 18.2109 9.36814 18.2109 9.82812V26.0156C18.2109 26.4756 18.0282 26.9168 17.703 27.242 17.3777 27.5673 16.9365 27.75 16.4766 27.75zm25.4375-5.7812H29.1953C28.7353 21.9688 28.2942 21.786 27.9689 21.4608 27.6437 21.1355 27.4609 20.6944 27.4609 20.2344S27.6437 19.3332 27.9689 19.008C28.2942 18.6827 28.7353 18.5 29.1953 18.5H41.9141C42.374 18.5 42.8152 18.6827 43.1405 19.008 43.4657 19.3332 43.6484 19.7744 43.6484 20.2344S43.4657 21.1355 43.1405 21.4608C42.8152 21.786 42.374 21.9688 41.9141 21.9688zM50.0078 31.2188H29.1953C28.7353 31.2188 28.2942 31.036 27.9689 30.7108 27.6437 30.3855 27.4609 29.9444 27.4609 29.4844S27.6437 28.5832 27.9689 28.258C28.2942 27.9327 28.7353 27.75 29.1953 27.75H50.0078C50.4678 27.75 50.9089 27.9327 51.2342 28.258 51.5595 28.5832 51.7422 29.0244 51.7422 29.4844S51.5595 30.3855 51.2342 30.7108C50.9089 31.036 50.4678 31.2188 50.0078 31.2188z"
                      fill="url(#paint3_linear_2103_1370)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2103_1370"
                        x1="4.34276"
                        y1="35.6512"
                        x2="23.9925"
                        y2="35.652"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#c02d28"></stop>
                        <stop offset="1" stop-color="#e66225"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2103_1370"
                        x1="3.76504"
                        y1="51.4532"
                        x2="24.5706"
                        y2="51.4542"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#c02d28"></stop>
                        <stop offset="1" stop-color="#e66225"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_2103_1370"
                        x1="10.1381"
                        y1="16.5733"
                        x2="70.2431"
                        y2="16.5761"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#c02d28"></stop>
                        <stop offset="1" stop-color="#e66225"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_2103_1370"
                        x1="14.7599"
                        y1="14.6461"
                        x2="65.6179"
                        y2="14.6487"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#c02d28"></stop>
                        <stop offset="1" stop-color="#e66225"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div class="text">Live Interactive Workshops</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const QualitySection = () => {
  return (
    <>
      <div className="quali-main-con">
        <div className="quality-section-main-container">
          <div className="quality-section-img-and-text-container">
            <div className="quality-section-text-section">
              <h1>200+ High Quality Courses</h1>
              <p>
                Modern, in-depth front-end engineering, Node.js, and full-stack
                courses.
              </p>
              <span></span>
              <h1>18 Curated Learning Paths</h1>
              <p>
                Pick your goal, and get a recommended set of courses complete
                with electives, editor notes and progress tracking.
              </p>
            </div>
            <div className="quality-section-img-section">
              <img
                src={qualitySectionImage}
                alt=""
                className="qualitySectionImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const DemoSection = () => {
  return (
    <>
      <div className="demo-main-con">
        <div className="demo-section-main-container">
          <div className="demo-section-img-and-text-container">
            <div className="demo-section-imaga">
              <img src={DemoSectionImage} alt="" />
            </div>
            <div className="demo-text-section-container">
              <h1>Custom Built Video Player with 4K Video</h1>
              <p>
                Supports choosing streaming quality, playback speed, taking
                notes on specific timestamps, and lesson descriptions and
                annotations. You can now give instructors feedback and ask your
                questions right within the player!
              </p>
              <h1>Closed Captioning</h1>
              <p>
                All videos are close-captioned, along with transcripts available
                for download.
              </p>
              <h1>iOS and Android Apps</h1>
              <p>
                Native mobile and tablet apps support offline downloading and
                watching videos offline on the plane, train, or anywhere. The
                mobile apps also support airplay to stream to your TV or
                Chromecast devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const PersonalizedDashboardSection = () => {
  return (
    <>
      <div className="personalize-main-con">
        <div className="quality-section-main-containerDashboard">
          <div className="quality-section-img-and-text-container">
            <div className="quality-section-text-section">
              <h1>Personalized Dashboard</h1>
              <p>
                Allows you to rearrange and prioritize courses, upcoming
                workshops, current learning paths, notes, and more.
              </p>

              <h1>Sortable Bookmarking</h1>
              <p>
                Save the courses you'd like to learn from later, and sort them
                in the order you choose.
              </p>
              <h1>Progress Tracking</h1>
              <p>Always know where you left off when you come back!</p>
            </div>
            <div className="quality-section-img-section">
              <img src={DashboarImage} alt="" className="qualitySectionImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const WorkShopSection = () => {
  return (
    <>
      {" "}
      <div className="wrk-main-con">
        <div className="demo-section-main-containerWorkshop">
          <div className="demo-section-img-and-text-container">
            <div className="demo-section-imaga">
              <img src={WorkshopImage} alt="" />
            </div>
            <div className="demo-text-section-container">
              <h1>Custom Built Video Player with 4K Video</h1>
              <p>
                Supports choosing streaming quality, playback speed, taking
                notes on specific timestamps, and lesson descriptions and
                annotations. You can now give instructors feedback and ask your
                questions right within the player!
              </p>
              <h1>Closed Captioning</h1>
              <p>
                All videos are close-captioned, along with transcripts available
                for download.
              </p>
              <button className="workshopButton">Browser Workshop</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const ProfileSection = () => {
  return (
    <>
      <div className="prof-main-con">
        <div className="quality-section-main-containerDashboard">
          <div className="quality-section-img-and-text-container">
            <div className="quality-section-text-section">
              <h1>User Profiles</h1>
              <p>
                Show off all your hard work on your user profiles that display:
                watched courses, learning actions, learning paths progress, and
                stats in one place.
              </p>

              <h1>Discord Community</h1>
              <p>
                Connect, chat, and hang out with other like-minded developers!
              </p>
              <h1>Social Sharing</h1>
              <p>
                After the course, you can one-click share that you’ve completed
                the course with your friends and colleagues!
              </p>
            </div>
            <div className="quality-section-img-section">
              <img src={ProfileImage} alt="" className="qualitySectionImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const FeatureCompaniesSection = () => {
  return (
    <>
      <div className="featureCompanies-section-main-container">
        <h1>Learn Straight from the Experts Who Shape the Modern Web</h1>
        <h2>200+ Courses Curated into 18 Learning Paths</h2>
        <div className="comp-contain">
          <div className="expert-logo">
            {/* Microsoft SVG */}
            <img src={micorsoft} alt="" />
          </div>
          <div className="expert-logo">
            {/* Netflix SVG */}
            <img src={netflix} alt="" />
          </div>
          <div className="expert-logo">
            {/* Stripe SVG */}
            <img src={strip} alt="" />
          </div>
          <div className="expert-logo">
            {/* Spotify SVG */}
            <img src={spotify} alt="" />
          </div>
        </div>
        <button className="feat-comp-button">Join Now</button>
      </div>
      <div className="comp-containforMediumScreensize">
        <div className="p-com-sec">
          <h1>Learn Straight from the Experts Who Shape the Modern Web</h1>
          <h2>200+ Courses Curated into 18 Learning Paths</h2>
          <div className="logoIcon">
            <div className="expert-logomedi">
              <div className="micorsoft">
                <img src={micorsoft} alt="" />
              </div>
              <div className="stripee">
                <img src={strip} alt="" />
              </div>
            </div>
            <div className="expert-logomedi">
              <div className="netflix">
                <img src={netflix} alt="" />
              </div>
              <div className="spotify">
                <img src={spotify} alt="" />
              </div>
            </div>
          </div>

          <button className="feat-comp-button">Join Now</button>
        </div>
      </div>
    </>
  );
};
export const FeatureQuizSection = () => {
  return (
    <>
      <div className="feature-quiz-sec-main-container">
        <div className="feature-quiz-cont-section">
          <h1> Not sure where to get started?</h1>
          <p>
            Answer three short questions and we'll recommend the best learning
            path for your experience level and goals
          </p>
          <div className="quiz-arr">
            <a href="#">Take the Quiz</a>
            <a href="#">
              <IoMdArrowDropright size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// export const AccordionSection = () => {
//   return (
//     <>
//       <div className="accordion-main-container">
//         <h1> Frequently Asked Questions</h1>
//         <Accordion />
//       </div>
//     </>
//   );
// };

// export default FeatureSectionNavbar;
