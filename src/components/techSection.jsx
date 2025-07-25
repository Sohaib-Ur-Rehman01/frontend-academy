import "./css/techSection.css";
import reactLogo from "../assets/reactlogo.svg";
import jsLogo from "../assets/JSlogo.svg";
import nodejsLogo from "../assets/nodejslogo.svg";
import nextJsLogo from "../assets/Nextjslogo.svg";
import gologo from "../assets/gologo.svg";
import tsLogo from "../assets/tsLogo.svg";
import databaseLogo from "../assets/database.svg";

export const TechSection = () => {
  return (
    <>
      <div className="frontend-masters-section">
        <div className="container">
          <section className="hero">
            <div className="live-event-banner">
              <b> Join us live online!</b>
              <b className="devsetup">AI Developer Setup</b> on Jul 30, 2025.
            </div>
          </section>
        </div>
      </div>
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ tech section completed */}

      <div className="tech-section">
        <h1>Gain Practical Tech Skills from Experts You Can Trust</h1>
        <p className="subheading">
          JavaScript, React, and TypeScript to Node.js and Backend (Go, Git,
          Docker, & More)
        </p>

        <div className="tech-icons">
          <div className="icon-circle">
            <img src={jsLogo} className="tech-icon" alt="" />
          </div>

          <div className="icon-circle">
            <img src={reactLogo} className="tech-icon" alt="" />
          </div>

          <div className="icon-circle">
            <img src={nodejsLogo} className="tech-icon" alt="" />
          </div>

          <div className="icon-circle">
            <img src={nextJsLogo} className="tech-icon" alt="" />
          </div>

          <div className="icon-circle">
            <img src={gologo} className="tech-icon" alt="" />
          </div>

          <div className="icon-circle">
            <img src={tsLogo} className="tech-icon" alt="" />
          </div>
          <div className="icon-circle">
            <img src={databaseLogo} className="tech-icon" alt="databaselogo" />
          </div>
        </div>

        <div className="learning-paths">
          Popular Learning Paths: <span className="path">Beginner</span> •
          <span className="path">Professional</span> •
          <span className="path">Fullstack</span>
        </div>
      </div>
    </>
  );
};
