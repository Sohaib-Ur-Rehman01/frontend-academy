import React from "react";
import CategorySlider from "./slidersmallcard";
import CategoryMediumSliderSection from "./categorymediumslidersection.jsx";
import { FiSearch } from "react-icons/fi";
import "../components/css/tutorialSection.css";
import TutorialMediumSliderSection from "./tutorialmediumslider.jsx";
import csscardimage from "../assets/css-card.webp";
export const TutorialsSection = () => {
  const tutorialCourses = [
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },
    {
      title: "Css style queries have so much potential",
      message: "By",
      name: "Web Dev Simplified",
      bgImage:
        "https://cdn.frontendmasters.com/assets/tutorials/webdevsimplified/style-queries/thumb-270.webp",
    },

    // Add more courses...
  ];
  const categories = [
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Full Stack",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Full Stack",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Full Stack",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Full Stack",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Full Stack",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Full Stack",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
  ];
  return (
    <>
      <section id="tutorial-section">
        <div className="tutorial-top-padding-div">
          <div className="tutorial-top-hero-logo-content-container">
            <div className="tutorial-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M40.9993 20C40.2662 19.9855 39.5453 19.81 38.8877 19.4859 38.23 19.1617 37.6517 18.697 37.1937 18.1244 36.7357 17.5519 36.4092 16.8857 36.2373 16.1729 36.0655 15.4602 36.0525 14.7183 36.1993 14H35.9993C34.9632 14.0109 33.9426 13.7488 33.04 13.24 32.1375 12.7313 31.3848 11.9938 30.8577 11.1018 30.3306 10.2098 30.0477 9.19477 30.0375 8.15874 30.0272 7.12271 30.2899 6.10224 30.7993 5.19999c-4.1818-1.5289-8.7542-1.61866-12.9927-.25507C13.568 6.30852 9.90569 9.04749 7.39982 12.7279 4.89395 16.4083 3.68784 20.8196 3.9726 25.263c.28476 4.4434 2.04409 8.6647 4.99925 11.9951C11.927 40.5885 15.909 42.8376 20.2869 43.649 24.6649 44.4604 29.1884 43.7877 33.1408 41.7376c3.9524-2.0502 7.1076-5.3607 8.9659-9.4069C43.9649 28.2845 44.4198 23.734 43.3993 19.4 42.7993 19.8 41.7993 20 40.9993 20z"
                  stroke="url(#paint0_linear_2252_24619)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M23.9993 30c3.3137.0 6-2.6863 6-6s-2.6863-6-6-6c-3.3137.0-6 2.6863-6 6s2.6863 6 6 6z"
                  stroke="url(#paint1_linear_2252_24619)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_2252_24619"
                    x1="3.94553"
                    y1="10.6509"
                    x2="43.9323"
                    y2="10.6525"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#c02d28"></stop>
                    <stop offset="1" stop-color="#e66225"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2252_24619"
                    x1="3.94553"
                    y1="10.6509"
                    x2="43.9323"
                    y2="10.6525"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#c02d28"></stop>
                    <stop offset="1" stop-color="#e66225"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="tutorial-heading">
              <h1>
                Snackable Tutorials from Creators Who are Masters of Their Craft
              </h1>
            </div>
            <div className="tutorial-para">
              <p>
                Turn spare moments into skill-building victories with short
                creator-led tutorials.
              </p>
            </div>
          </div>
        </div>
        <div className="tutorial-search-mini-slider-container">
          <div className="tutorial-section-search-input">
            <FiSearch className="tutorial-search-icon" size={30} />
            <input
              type="text"
              placeholder="
        Search for a course, language, framework, or teacher..."
              className="tutorial-section-input"
            />
          </div>
          <div className="mini-card-slider">
            <CategorySlider />
          </div>
          <div className="feature-article-card-container">
            <div className="article-image-container">
              <img src={csscardimage} alt="" />
            </div>
            <div className="article-content">
              <div className="article-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3.74812 15.75H14.2481M8.66962 2.4495C8.70199 2.3907 8.74955 2.34167 8.80733 2.30752 8.86512 2.27338 8.931 2.25536 8.99812 2.25536 9.06524 2.25536 9.13113 2.27338 9.18891 2.30752 9.24669 2.34167 9.29425 2.3907 9.32662 2.4495l2.21398 4.203C11.5934 6.74982 11.6671 6.83424 11.7564 6.89971 11.8457 6.96518 11.9484 7.01006 12.0571 7.03114 12.1658 7.05222 12.2778 7.04897 12.3851 7.02163S12.5923 6.94353 12.6776 6.873l3.2078-2.748C15.9469 4.07491 16.0228 4.04566 16.1021 4.04145 16.1814 4.03724 16.2599 4.05828 16.3264 4.10156 16.393 4.14483 16.4441 4.2081 16.4724 4.28226 16.5007 4.35643 16.5047 4.43765 16.4839 4.51425L14.3584 12.1987C14.315 12.356 14.2215 12.4948 14.0921 12.5942 13.9627 12.6935 13.8045 12.7479 13.6414 12.7492H4.35562C4.19237 12.7481 4.03395 12.6937 3.90441 12.5944 3.77488 12.495 3.68129 12.3561 3.63787 12.1987L1.51312 4.515C1.49231 4.4384 1.49634 4.35718 1.52463 4.28301 1.55292 4.20885 1.60401 4.14558 1.67055 4.10231 1.73709 4.05903 1.81564 4.03799 1.8949 4.0422 1.97416 4.04641 2.05004 4.07566 2.11162 4.12575l3.207 2.748C5.40397 6.94428 5.50388 6.99504 5.61117 7.02238 5.71846 7.04972 5.83047 7.05297 5.93917 7.03189 6.04787 7.01081 6.15055 6.96593 6.23984 6.90046 6.32913 6.83499 6.40282 6.75057 6.45562 6.65325l2.214-4.20375z"
                    stroke="currentcolor"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a href="#">FEATURED</a>
              </div>
              <div className="article-title">
                <h2>:has() is more than a parent selector</h2>
              </div>
              <div className="article-para">
                <p>
                  The :has() pseudo selector allows you to select the parent of
                  a specific element very easily. But it can do so much more!
                </p>
              </div>
              <div className="article-author">
                <div className="article-author author-svg-container">
                  <p>
                    By <span>Kevin Powell</span>
                  </p>
                </div>
                <div className="auth-svg">
                  <svg
                    class="info-icon"
                    data-card-item-anchor=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 16V12m0-4H12.01M22 12c0 5.5228-4.4772 10-10 10C6.47715 22 2 17.5228 2 12 2 6.47715 6.47715 2 12 2c5.5228.0 10 4.47715 10 10z"
                      stroke="currentcolor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="tutorial-med-slider">
            <CategoryMediumSliderSection
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.5 14.5C9.16304 14.5 9.79893 14.2366 10.2678 13.7678 10.7366 13.2989 11 12.663 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5S19 13 19 15C19 15.9193 18.8189 16.8295 18.4672 17.6788 18.1154 18.5281 17.5998 19.2997 16.9497 19.9497 16.2997 20.5998 15.5281 21.1154 14.6788 21.4672 13.8295 21.8189 12.9193 22 12 22S10.1705 21.8189 9.32122 21.4672C8.47194 21.1154 7.70026 20.5998 7.05025 19.9497 6.40024 19.2997 5.88463 18.5281 5.53284 17.6788 5.18106 16.8295 5 15.9193 5 15c0-1.153.433-2.294 1-3 0 .663.26339 1.2989.73223 1.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5z"
                    stroke="#ccc"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              }
              title="Popular"
              onViewMore={() => console.log("View More Clicked")}
              viewMoreText="View More"
              SliderComponent={TutorialMediumSliderSection}
              sliderProps={{ courses: tutorialCourses }}
            />
            <CategoryMediumSliderSection
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.5 14.5C9.16304 14.5 9.79893 14.2366 10.2678 13.7678 10.7366 13.2989 11 12.663 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5S19 13 19 15C19 15.9193 18.8189 16.8295 18.4672 17.6788 18.1154 18.5281 17.5998 19.2997 16.9497 19.9497 16.2997 20.5998 15.5281 21.1154 14.6788 21.4672 13.8295 21.8189 12.9193 22 12 22S10.1705 21.8189 9.32122 21.4672C8.47194 21.1154 7.70026 20.5998 7.05025 19.9497 6.40024 19.2997 5.88463 18.5281 5.53284 17.6788 5.18106 16.8295 5 15.9193 5 15c0-1.153.433-2.294 1-3 0 .663.26339 1.2989.73223 1.7678C7.20107 14.2366 7.83696 14.5 8.5 14.5z"
                    stroke="#ccc"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              }
              title="Popular"
              onViewMore={() => console.log("View More Clicked")}
              viewMoreText="View More"
              SliderComponent={TutorialMediumSliderSection}
              sliderProps={{ courses: tutorialCourses }}
            />
            {/* small cards */}
            <div className="tutorial-head-line">
              <strong>All Topics</strong>
              <hr className="tutorial-course-section-hr" />
            </div>

            <div className="all-topics-tags-main-container">
              <div className="topics-container">
                {categories.map((cat) => (
                  <div className="all-category-card">
                    <img src={cat.img} alt={cat.name} />
                    <span>{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* small cards */}
          </div>
        </div>
      </section>
    </>
  );
};
