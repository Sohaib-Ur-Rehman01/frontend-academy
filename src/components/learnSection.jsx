import "./css/learnSection.css";
import cardone from "../assets/cardone.jpg";
import secondcard from "../assets/secondcard.jpg";
import thirdcard from "../assets/thirdcard.jpg";
import fourthcard from "../assets/fourthcard.jpg";
import fifthcard from "../assets/fifthcard.jpg";
import sixthcard from "../assets/sixthcard.jpg";
import cardoneIcon from "../assets/cardoneIcon.svg";
import secondcardIcon from "../assets/secondcardIcon.svg";
import thirdcardIcon from "../assets/thirdcardIcon.svg";
import fourthcardIcon from "../assets/fourthcardIcon.svg";
import fifthcardIcon from "../assets/fifthcardIcon.svg";
import sixthcardIcon from "../assets/sixthcardIcon.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import jscard from "../assets/js.svg";
import csscard from "../assets/css.svg";
import nodejscard from "../assets/nodejs.svg";
import typescriptcard from "../assets/typescript.svg";
import jsperformercard from "../assets/jsperformance.svg";
import functionaljscard from "../assets/fuctionaljs.svg";
import reactjscard from "../assets/react.svg";
import vuejscard from "../assets/vuejs.svg";
import angularcard from "../assets/angular.svg";
import codearchitecture from "../assets/codearchitecture.svg";
import buildtools from "../assets/tools.svg";
import leadership from "../assets/leadership.svg";
import backendlanguages from "../assets/backgroundlanguage.svg";
import DataVisua from "../assets/datavisualization.svg";
import python from "../assets/python.svg";
import apibrowse from "../assets/browserapi.svg";
import backendlang from "../assets/backgroundlanguage.svg";

export const LearnHeroSection = () => {
  return (
    <>
      <section className="learn-hero-section">
        <div className="learn-hero-section-main-container">
          <div className="learn-hero-section-content-container">
            <h1>Build Your Web Development Skills Step by Step</h1>
            <p>
              Start a guided learning path tailored to your goals, with a clear
              roadmap for what to learn next.
            </p>
            <button>Get Unlimited Access Now</button>
          </div>
        </div>
      </section>
    </>
  );
};
export const LearningPathSection = () => {
  const defaultCards = [
    {
      id: 1,
      title: "Frontend Basics",
      desc: "HTML, CSS & JS foundations to build interactive UIs.",
      icon: cardoneIcon,
      bg: cardone,
      footer: "6 lessons · Beginner",
    },
    {
      id: 2,
      title: "React Deep Dive",
      desc: "Components, hooks, state management and best practices.",
      icon: secondcardIcon,
      bg: secondcard,
      footer: "10 lessons · Intermediate",
    },
    {
      id: 3,
      title: "Design Systems",
      desc: "Build reusable components & consistent UI libraries.",
      icon: thirdcardIcon,
      bg: thirdcard,
      footer: "8 lessons · Intermediate",
    },
    {
      id: 4,
      title: "Performance",
      desc: "Optimize loading, rendering and runtime performance.",
      icon: fourthcardIcon,
      bg: fourthcard,
      footer: "5 lessons · Advanced",
    },
    {
      id: 5,
      title: "Testing",
      desc: "Write reliable tests for components and hooks.",
      icon: fifthcardIcon,
      bg: fifthcard,
      footer: "7 lessons · Intermediate",
    },
    {
      id: 6,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: sixthcardIcon,
      bg: sixthcard,
      footer: "4 lessons · Beginner",
    },
  ];
  const topicCards = [
    {
      id: 1,
      title: "Frontend Basics",
      desc: "HTML, CSS & JS foundations to build interactive UIs.",
      icon: jscard,
      bg: "#877120",
      footer: "6 lessons · Beginner",
    },
    {
      id: 2,
      title: "React Deep Dive",
      desc: "Components, hooks, state management and best practices.",
      icon: csscard,
      bg: "#28678f",
      footer: "10 lessons · Intermediate",
    },
    {
      id: 3,
      title: "Design Systems",
      desc: "Build reusable components & consistent UI libraries.",
      icon: nodejscard,
      bg: "#0f6635",
      footer: "8 lessons · Intermediate",
    },
    {
      id: 4,
      title: "Performance",
      desc: "Optimize loading, rendering and runtime performance.",
      icon: typescriptcard,
      bg: "#3c5d8f",
      footer: "5 lessons · Advanced",
    },
    {
      id: 5,
      title: "Testing",
      desc: "Write reliable tests for components and hooks.",
      icon: jsperformercard,
      bg: "#6e4c34",
      footer: "7 lessons · Intermediate",
    },
    {
      id: 6,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: functionaljscard,
      bg: "#4a7a43",
      footer: "4 lessons · Beginner",
    },
    {
      id: 7,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: reactjscard,
      bg: "#0f6570",
      footer: "4 lessons · Beginner",
    },
    {
      id: 8,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: vuejscard,
      bg: "#0e8a65",
      footer: "4 lessons · Beginner",
    },
    {
      id: 9,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: angularcard,
      bg: "#c70a2d",
      footer: "4 lessons · Beginner",
    },
    {
      id: 10,
      title: "aaaDeployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: codearchitecture,
      bg: "#803838",
      footer: "4 lessons · Beginner",
    },
    {
      id: 11,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: buildtools,
      bg: "#1d3f63",
      footer: "4 lessons · Beginner",
    },
    {
      id: 12,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: leadership,
      bg: "#3f453e",
      footer: "4 lessons · Beginner",
    },
    {
      id: 13,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: backendlang,
      bg: "#1d3f63",
      footer: "4 lessons · Beginner",
    },
    {
      id: 14,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: apibrowse,
      bg: "#1d3f63",
      footer: "4 lessons · Beginner",
    },
    {
      id: 15,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: python,
      bg: "#3c5878",
      footer: "4 lessons · Beginner",
    },
    {
      id: 16,
      title: "Deployment",
      desc: "From CI/CD to production-ready rollouts.",
      icon: DataVisua,
      bg: "#783737",
      footer: "4 lessons · Beginner",
    },
  ];
  function getCardBackground(bg) {
    const isColor = /^#([0-9A-F]{3}){1,2}$/i.test(bg);
    const gradientBreakpoint = "30%";
    if (isColor) {
      return {
        background: `linear-gradient(to right, ${bg} 0%, #333333 ${gradientBreakpoint})`,
        backgroundClip: "padding-box",
      };
    }
    return {
      backgroundImage: `
        linear-gradient(270deg, #222 14.93%, rgba(34, 34, 34, 0) 114.01%),
        linear-gradient(0deg, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .5) 100%),
        url(${bg})
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  return (
    <>
      <section className="learning-path-section">
        <div className="learning-path-main-container">
          <h1>All Learning Paths </h1>
          <div className="paths-cards-main-container">
            {defaultCards.map((card) => (
              <div
                key={card.id}
                className="path-item-card"
                style={{
                  backgroundImage: `linear-gradient(270deg, #222 14.93%, rgba(34, 34, 34, 0) 114.01%), linear-gradient(0deg, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .5) 100%),url(${card.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundClip: "padding-box",
                }}
              >
                <div className="path-icon">
                  <img src={card.icon} alt={card.title} />
                </div>
                <div className="path-content">
                  <div className="arrowandheading">
                    <h1>{card.title}</h1>
                    <div className="arrowLeft">
                      {" "}
                      <MdKeyboardArrowRight size={40} />
                    </div>
                  </div>
                  <p>{card.desc}</p>
                  <hr />
                  <strong>{card.footer}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="topic-path-section-main-container">
          <div className="topic-content-card-container">
            <h1>All Topic Path</h1>
            <div className="paths-cards-main-container">
              {topicCards.map((card) => (
                <div
                  key={card.id}
                  className="topic-path-item-card"
                  style={getCardBackground(card.bg)}
                >
                  <div className="topic-icon">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="topic-logo-image"
                    />
                  </div>
                  <div className="topic-path-content">
                    <div className="topic-arrowandheading">
                      <h1>{card.title}</h1>
                      <div className="arrowLeft">
                        {" "}
                        <MdKeyboardArrowRight
                          size={40}
                          style={{ color: card.bg }}
                        />
                      </div>
                    </div>
                    <p>{card.desc}</p>
                    <hr />
                    <strong>{card.footer}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const LearningTestimonialSection = () => {
  return (
    <>
      <section className="learning-testimonial-main-section">
        <div className="learning-testimonial-main-container">
          <div className="yellow-testimon">
            <div className="one">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="two">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
          </div>
          <div className="yellow-testimon">
            {" "}
            <div className="one">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="two">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
          </div>
          <div className="yellow-testimon">
            {" "}
            <div className="one">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="two">
              <h1>Lorem ipsum dolor sit amet</h1>
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
          </div>
        </div>
        {/* for medium screen */}
        <div className="learning-testimonial-medium-scree-container">
          <div className="iii">
          <div className="one">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <div className="two">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>{" "}
          <div className="one">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <div className="two">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>{" "}
          <div className="one">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <div className="two">
            <h1>Lorem ipsum dolor sit amet</h1>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};
