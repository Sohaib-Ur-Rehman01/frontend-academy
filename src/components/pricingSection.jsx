import React from "react";
import "../components/css/pricingSection.css";
import "../components/css/featuresSection.css";
import fimg from "../assets/mQLifuYE.jpg";
import simg from "../assets/kyIDnD9t.jpg";
import timg from "../assets/Izna0Tf8.jpg";
import fifthimg from "../assets/avater.webp";
import feactureSectionImage from "../assets/features.webp";
import micorsoft from "../assets/microsoft.svg";
import netflix from "../assets/netflix.svg";
import strip from "../assets/stripe.svg";
import spotify from "../assets/spotify.svg";
// import quote from "../assets/quote.svg";
import TestimonialWall from "./testimonialcardcomponent";

import { IoMdArrowDropright } from "react-icons/io";

function PricingSection() {
  const plans = [
    {
      id: 1,
      title: "Learning Paths",
      description:
        "Pick your goal, and get a recommended set of courses complete with electives, editor notes, and progress tracking.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.5 19H17.5C18.4283 19 19.3185 18.6313 19.9749 17.9749C20.6313 17.3185 21 16.4283 21 15.5C21 14.5717 20.6313 13.6815 19.9749 13.0251C19.3185 12.3687 18.4283 12 17.5 12H6.5C5.57174 12 4.6815 11.6313 4.02513 10.9749C3.36875 10.3185 3 9.42826 3 8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5H15"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 22C7.65685 22 9 20.6569 9 19C9 17.3431 7.65685 16 6 16C4.34315 16 3 17.3431 3 19C3 20.6569 4.34315 22 6 22Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Advanced Player",
      description:
        "All courses are presented in a custom built player, complete with annotations, notes, transcripts, lesson descriptions, progress syncing, and much more!",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 7L15 10L10 13V7Z"
            stroke="url(#paint0_linear_2629_15322)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z"
            stroke="url(#paint1_linear_2629_15322)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 17V21"
            stroke="url(#paint2_linear_2629_15322)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 21H16"
            stroke="url(#paint3_linear_2629_15322)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_2629_15322"
              x1="10.0017"
              y1="8.00004"
              x2="15.0001"
              y2="8.00021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_2629_15322"
              x1="2.00695"
              y1="5.33343"
              x2="22.0003"
              y2="5.33457"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_2629_15322"
              x1="12.0003"
              y1="17.6667"
              x2="13"
              y2="17.6667"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_2629_15322"
              x1="8.00278"
              y1="21.1667"
              x2="16.0001"
              y2="21.1692"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Interact with Masters",
      description:
        "Access to Live Workshops - gain access to our live streamed workshops where you can participate with QA and chat, and learn alongside the masters!",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9H4.5C3.83696 9 3.20107 8.73661 2.73223 8.26777C2.26339 7.79893 2 7.16304 2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H6"
            stroke="url(#paint0_linear_2629_15332)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 9H19.5C20.163 9 20.7989 8.73661 21.2678 8.26777C21.7366 7.79893 22 7.16304 22 6.5C22 5.83696 21.7366 5.20107 21.2678 4.73223C20.7989 4.26339 20.163 4 19.5 4H18"
            stroke="url(#paint1_linear_2629_15332)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 22H20"
            stroke="url(#paint2_linear_2629_15332)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 14.66V17C10 17.55 9.53 17.98 9.03 18.21C7.85 18.75 7 20.24 7 22"
            stroke="url(#paint3_linear_2629_15332)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14 14.66V17C14 17.55 14.47 17.98 14.97 18.21C16.15 18.75 17 20.24 17 22"
            stroke="url(#paint4_linear_2629_15332)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M18 2H6V9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V2Z"
            stroke="url(#paint5_linear_2629_15332)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_2629_15332"
              x1="2.00139"
              y1="4.83337"
              x2="6.00006"
              y2="4.8335"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_2629_15332"
              x1="18.0014"
              y1="4.83337"
              x2="22.0001"
              y2="4.8335"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_2629_15332"
              x1="4.00556"
              y1="22.1667"
              x2="20.0002"
              y2="22.1769"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_2629_15332"
              x1="7.00104"
              y1="15.8834"
              x2="10"
              y2="15.8835"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_2629_15332"
              x1="14.001"
              y1="15.8834"
              x2="17"
              y2="15.8835"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_2629_15332"
              x1="6.00417"
              y1="4.16676"
              x2="18.0002"
              y2="4.1672"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C02D28"></stop>
              <stop offset="1" stop-color="#E66225"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 1,
      title: "Learning Paths",
      description:
        "Pick your goal, and get a recommended set of courses complete with electives, editor notes, and progress tracking.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.5 19H17.5C18.4283 19 19.3185 18.6313 19.9749 17.9749C20.6313 17.3185 21 16.4283 21 15.5C21 14.5717 20.6313 13.6815 19.9749 13.0251C19.3185 12.3687 18.4283 12 17.5 12H6.5C5.57174 12 4.6815 11.6313 4.02513 10.9749C3.36875 10.3185 3 9.42826 3 8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5H15"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 22C7.65685 22 9 20.6569 9 19C9 17.3431 7.65685 16 6 16C4.34315 16 3 17.3431 3 19C3 20.6569 4.34315 22 6 22Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 1,
      title: "Learning Paths",
      description:
        "Pick your goal, and get a recommended set of courses complete with electives, editor notes, and progress tracking.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.5 19H17.5C18.4283 19 19.3185 18.6313 19.9749 17.9749C20.6313 17.3185 21 16.4283 21 15.5C21 14.5717 20.6313 13.6815 19.9749 13.0251C19.3185 12.3687 18.4283 12 17.5 12H6.5C5.57174 12 4.6815 11.6313 4.02513 10.9749C3.36875 10.3185 3 9.42826 3 8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5H15"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 22C7.65685 22 9 20.6569 9 19C9 17.3431 7.65685 16 6 16C4.34315 16 3 17.3431 3 19C3 20.6569 4.34315 22 6 22Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 1,
      title: "Learning Paths",
      description:
        "Pick your goal, and get a recommended set of courses complete with electives, editor notes, and progress tracking.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.5 19H17.5C18.4283 19 19.3185 18.6313 19.9749 17.9749C20.6313 17.3185 21 16.4283 21 15.5C21 14.5717 20.6313 13.6815 19.9749 13.0251C19.3185 12.3687 18.4283 12 17.5 12H6.5C5.57174 12 4.6815 11.6313 4.02513 10.9749C3.36875 10.3185 3 9.42826 3 8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5H15"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 22C7.65685 22 9 20.6569 9 19C9 17.3431 7.65685 16 6 16C4.34315 16 3 17.3431 3 19C3 20.6569 4.34315 22 6 22Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  const testimonialsData = [
    {
      text: "Frontend Masters just keeps on giving us amazing workshops. The ROI I've gotten from this platform using it over the years is immeasurable. Worth every dollar.",
      image:
        "https://pbs.twimg.com/profile_images/1742330075436232704/Izna0Tf8.jpg",
      name: "Austin Akers",
      handle: "tweetmonster999",
    },
    {
      text: "Frontend masters really nailed the course subscription model with regular course updates and great content in their platform.",
      image:
        "https://cdn.senja.io/public/media/74ec2291-156b-436b-8f2a-5541fb11fb8c_ed93024e-11a3-4ee2-b960-c39359a4338b_KevinZuniga.jpeg",
      name: "Kevin",
      handle: "kevinzunigacuel",
    },
    {
      text: `f you are really interested in honing your skill as a dev, the best thing you can do for yourself is to subscribe to Frontend Masters.\nIMO, no learning resources online beat what you get from Frontend Masters.`,
      image:
        "https://pbs.twimg.com/profile_images/1693959786595864576/vYQZNI53.jpg",
      name: "Yusuf Lanre",
      handle: "yusfulcoder",
    },
  ];
  return (
    <>
      <section className="pricing-hero-section">
        <div className="pricing-section-hero-section-main-container">
          <div className="pricing-heading-container">
            <h1>Master the Full Stack:Frontend to Backend</h1>
            <p>
              Unlimited learning with 250+ courses, live workshops, and mobile
              apps to level up anywhere{" "}
            </p>
          </div>
          <div className="multiple-images-and-star-main-container">
            <div className="multiple-images-container">
              <img src={timg} alt="" className="multi-images" />
              <img src={simg} alt="" className="multi-images" />
              <img src={fimg} alt="" className="multi-images" />
              <img src={fifthimg} alt="" className="multi-images" />
              {/* <img src={jslogo} alt="" className="multi-images" /> */}
            </div>
            <div className="star-container">
              <div class="stars">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 1L14.59 7.26L21.5 8.27L16.5 13.14L17.68 20.02L11.5 16.77L5.32 20.02L6.5 13.14L1.5 8.27L8.41 7.26L11.5 1Z"
                    fill="#F09E14"
                    stroke="#F09E14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 1L14.59 7.26L21.5 8.27L16.5 13.14L17.68 20.02L11.5 16.77L5.32 20.02L6.5 13.14L1.5 8.27L8.41 7.26L11.5 1Z"
                    fill="#F09E14"
                    stroke="#F09E14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 1L14.59 7.26L21.5 8.27L16.5 13.14L17.68 20.02L11.5 16.77L5.32 20.02L6.5 13.14L1.5 8.27L8.41 7.26L11.5 1Z"
                    fill="#F09E14"
                    stroke="#F09E14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 1L14.59 7.26L21.5 8.27L16.5 13.14L17.68 20.02L11.5 16.77L5.32 20.02L6.5 13.14L1.5 8.27L8.41 7.26L11.5 1Z"
                    fill="#F09E14"
                    stroke="#F09E14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 1L14.59 7.26L21.5 8.27L16.5 13.14L17.68 20.02L11.5 16.77L5.32 20.02L6.5 13.14L1.5 8.27L8.41 7.26L11.5 1Z"
                    fill="#F09E14"
                    stroke="#F09E14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="star-content">
                <p>Loved by 500k+ developers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="emptyforpadding"></div>
        <div className="pricing-cards-main-container">
          <div className="pricing-cards one">
            <div className="card-type">
              <h1>For Individuals</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>

            <div className="price-card-content">
              <div className="team-card">
                <div className="team-card-container">
                  <div className="team-card-pricing">
                    <div className="monthly-and-btn">
                      <h3>Monthly</h3>
                      <button>Save 27%</button>
                    </div>
                    <div className="pricing">
                      <p>$24.5</p>
                      <span>per seat,per month</span>
                    </div>
                    <div className="m-p">&nbsp</div>
                    <hr className="price-line" />
                    <p className="first-card-para">
                      {" "}
                      Access all in-depth courses, workshops, and mobile apps.
                    </p>{" "}
                  </div>

                  <div className="team-card-btn">
                    <button>Start Learning</button>
                  </div>
                </div>
                <div className="team-card-container green">
                  <div className="team-card-pricing">
                    <div className="monthly-and-btn">
                      <h3>Yearly</h3>
                      <button>Save 37%</button>
                    </div>
                    <div className="pricing">
                      <p>$245</p>
                      <span>per seat,per year</span>
                    </div>
                    <div className="m-p">&nbsp</div>
                    <hr className="price-line" />
                    <p className="first-card-para">
                      Access all in-depth courses, workshops, and mobile apps.
                    </p>
                  </div>

                  <div className="team-card-btn">
                    <button>Start Learning</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-cards two">
            <div className="card-type">
              <h1>For Teams</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M16 21.5V19.5C16 18.4391 15.5786 17.4217 14.8284 16.6716C14.0783 15.9214 13.0609 15.5 12 15.5H6C4.93913 15.5 3.92172 15.9214 3.17157 16.6716C2.42143 17.4217 2 18.4391 2 19.5V21.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 21.5V19.5C21.9993 18.6137 21.7044 17.7528 21.1614 17.0523C20.6184 16.3519 19.8581 15.8516 19 15.63"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 3.63C16.8604 3.85031 17.623 4.35071 18.1676 5.05232C18.7122 5.75392 19.0078 6.61683 19.0078 7.505C19.0078 8.39318 18.7122 9.25608 18.1676 9.95769C17.623 10.6593 16.8604 11.1597 16 11.38"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="team-card">
              <div className="team-card-container">
                <div className="team-card-pricing">
                  <div className="monthly-and-btn">
                    <h3>Monthly</h3>
                    <button>Save 27%</button>
                  </div>
                  <div className="pricing">
                    <p>$24.5</p>
                    <span>per seat,per month</span>
                  </div>
                  <div className="m-p">&nbsp</div>
                  <hr className="price-line" />
                  <ul className="pricing-ul">
                    <li>
                      Access all courses and live workshops for 10+ users.
                    </li>
                    <li>Reassignable seats with flexible management.</li>
                    <li>Team reporting to track progress.</li>
                    <li>
                      Flexible payment options (invoice, PO, bank transfer).
                    </li>
                    <li>
                      Custom learning plans tailored to company goals and skill
                      levels.
                    </li>
                    <li>Single Sign-On (SSO).</li>
                    <li>Advanced reporting and analytics.</li>
                  </ul>
                </div>

                <div className="team-card-btn">
                  <button>Start Learning</button>
                </div>
              </div>
              <div className="team-card-container green">
                <div className="team-card-pricing">
                  <div className="monthly-and-btn">
                    <h3>Yearly</h3>
                    <button>Save 37%</button>
                  </div>
                  <div className="pricing">
                    <p>$245</p>
                    <span>per seat,per year</span>
                  </div>
                  <div className="m-p">&nbsp</div>
                  <hr className="price-line" />
                  <ul className="pricing-ul">
                    <li>
                      Access all courses and live workshops for 10+ users.
                    </li>
                    <li>Reassignable seats with flexible management.</li>
                    <li>Team reporting to track progress.</li>
                    <li>
                      Flexible payment options (invoice, PO, bank transfer).
                    </li>
                    <li>
                      Custom learning plans tailored to company goals and skill
                      levels.
                    </li>
                    <li>Single Sign-On (SSO).</li>
                    <li>Advanced reporting and analytics.</li>
                  </ul>
                </div>

                <div className="team-card-btn">
                  <button>Start Learning</button>
                </div>
              </div>
            </div>
            <div className="btm-section-team">
              <a href="#">Team Features</a>
              <a href="#">Team Features</a>
            </div>
          </div>
          <div className="pricing-cards three">
            <div>
              <div className="card-type">
                <h1>For Enterprises</h1>
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  height="26"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  width="26"
                  xmlns="http://www.w3.org/2000/svg"
                  id="fi_8621847"
                >
                  <g id="Icon">
                    <path
                      fill="#fff"
                      d="m22 21.011h-20c-.414 0-.75.337-.75.75 0 .414.336.75.75.75h20c.414 0 .75-.336.75-.75 0-.413-.336-.75-.75-.75z"
                    ></path>
                    <path
                      fill="#fff"
                      d="m14.75 21.761v-18.523c0-.58-.288-1.123-.769-1.449-.481-.325-1.092-.391-1.631-.175l-8 3.2c-.664.265-1.1.909-1.1 1.625v15.322c0 .415.336.75.75.75h10c.414 0 .75-.335.75-.75zm-7.75-2.25h4c.414 0 .75-.336.75-.75 0-.413-.336-.75-.75-.75h-4c-.414 0-.75.337-.75.75 0 .414.336.75.75.75zm0-3.5h4c.414 0 .75-.336.75-.75 0-.413-.336-.75-.75-.75h-4c-.414 0-.75.337-.75.75 0 .414.336.75.75.75zm0-3.5h4c.414 0 .75-.336.75-.75 0-.413-.336-.75-.75-.75h-4c-.414 0-.75.337-.75.75 0 .414.336.75.75.75zm0-3.5h4c.414 0 .75-.336.75-.75 0-.413-.336-.75-.75-.75h-4c-.414 0-.75.337-.75.75 0 .414.336.75.75.75z"
                    ></path>
                    <path
                      fill="#fff"
                      d="m15.75 7.011v14.75c0 .269-.06.523-.168.75h4.418c.414 0 .75-.335.75-.75v-13c0-.966-.784-1.75-1.75-1.75z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="pricing-contact-card">
                <div className="contact-prcing-card-content-container">
                  <h3 className="pricing-contact-card-heading">Yearly</h3>
                  <div className="pricing">
                    <p>Contact Us</p>
                    <span>per seat,per year</span>
                  </div>
                  <div className="m-p">&nbsp</div>
                  <hr className="price-line" />
                  <ul className="pricing-ul">
                    <li>
                      Access all courses and live workshops for 10+ users.
                    </li>
                    <li>Reassignable seats with flexible management.</li>
                    <li>Team reporting to track progress.</li>
                    <li>
                      Flexible payment options (invoice, PO, bank transfer).
                    </li>
                    <li>
                      Custom learning plans tailored to company goals and skill
                      levels.
                    </li>
                    <li>Single Sign-On (SSO).</li>
                    <li>Advanced reporting and analytics.</li>
                  </ul>
                  div
                  <div className="team-card-btn">
                    <button>sales@frontendmaster.com</button>
                  </div>
                </div>
              </div>
              <div className="btm-section">
                <a href="#">Enterprises Features</a>
              </div>
            </div>
          </div>
        </div>
        <div className="convienceyourboss">
          <div className="checkout">
            <p>
              All plans include the option to have your manager complete the
              checkout process
            </p>
          </div>
          <div className="hr">
            <hr className="convienceportionhr" />
          </div>
          <div className="pay-section">
            <div className="icon-price">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="__web-inspector-hide-shortcut__"
              >
                <path
                  d="M20.5 4.01172H4.5c-1.10457.0-2 .895429999999999-2 2V18.0117c0 1.1046.89543 2 2 2h16c1.1046.0 2-.895400000000002 2-2V6.01172c0-1.10457-.895399999999999-2-2-2z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.5 7.01172 13.53 12.7117C13.2213 12.9051 12.8643 13.0077 12.5 13.0077S11.7787 12.9051 11.47 12.7117L2.5 7.01172"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="para-price">
              <p>Convience your boss to pay</p>
            </div>
            <div className="left-arrow-price">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M192 128l128 128-128 128z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="all-plains-price-section">
          <div className="all-plains-price-container">
            <h2>Include all Plans:</h2>
            <div className="all-plans-container">
              {plans.map((plan) => (
                <div className="plans-logo-and-para">
                  <div className="planlogo">
                    {plan.icon}
                    <h3>{plan.title}</h3>
                  </div>
                  <div className="plan-para">
                    <p>{plan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <div className="price-hero-section-main-container">
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
                    the skills they teach at top companies you know like
                    Netflix, Spotify, Google, and Stripe. In addition, our
                    courses are regularly updated to keep pace with the latest
                    evolutions to ensure you're learning industry best practices
                    and the latest techniques.
                  </p>
                </div>
                {/* ///////////////////////////////////////////// */}
                <div className="priceCompanies-section-main-container">
                  <div className="price-contain">
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
                </div>
                {/* ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]responsive */}
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
                {/* ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]responsive */}
                {/* ///////////////////////////////////////////// */}
              </div>
            </div>
            <div class="feature-hero-section-feature-items"></div>
          </div>
        </div>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {/* \\\\\\\\\\\\\\\\\testimonial\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <div className="test-main-container">
          <div className="pricing-testimonial-container">
            <h2 className="heading">What They're Saying About Us</h2>
            <TestimonialWall
              bgColor="#0a55a1"
              testimonials={testimonialsData}
            />
          </div>
        </div>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\testimonial\\\\\\\\\\\\\\\\\\\\\\\ */}
      </section>
    </>
  );
}

export default PricingSection;
