import "./css/techSection.css";
import reactLogo from "../assets/reactlogo.svg";
import jsLogo from "../assets/JSlogo.svg";
import nodejsLogo from "../assets/nodejslogo.svg";
import nextJsLogo from "../assets/Nextjslogo.svg";
import tsLogo from "../assets/tsLogo.svg";
import gologo from "../assets/golanguage.svg";
import databaseLogo from "../assets/database.svg";

export const TechSection = () => {
  return (
    <>
      <div className="tec-main-container">
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ tech section completed */}

        <div className="tech-section">
          <div className="frontends-masters-section">
            <div className="max-container">
              <div className="container">
                <section className="hero">
                  <div className="live-event-banner">
                    <b> Join us live online!</b>
                    <b className="devsetup">AI Developer Setup</b> on Jul 30,
                    2025.
                  </div>
                </section>
              </div>
            </div>
          </div>
          <h1 className="my-fav-color">
            Gain Practical Tech Skills from Experts You Can Trust
          </h1>
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
              <img
                src={databaseLogo}
                className="tech-icon"
                alt="databaselogo"
              />
            </div>
          </div>

          <div className="learning-paths">
            Popular Learning Paths: <span className="path">Beginner</span> •
            <span> </span>
            <span className="path">Professional</span> •<span> </span>
            <span className="path">Fullstack</span>
          </div>
        </div>
      </div>
      {/* for backup */}

      {/* <div className="team-testimonials-wall">
        
          <div className="testimonial-column">
            <div className="team-testimonial-card">
              <img src={quote} alt="" />
              <blockquote>
                When, without any prompting; your manager offers you a Frontend
                Masters subscription you know you picked a good place to work 😍
              </blockquote>
              <div className="team-testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah O'Brien"
                />
                <div>
                  <span className="team-user-name">Sarah O'Brien</span>
                  <span className="team-user-handle">@sarocodes</span>
                </div>
              </div>
            </div>

            <div className="team-testimonial-card">
              <img src={quote} alt="" />
              <blockquote>
                I have been using Frontend Masters for years and it has leveled
                up my skills every time.
              </blockquote>
              <div className="team-testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/men/30.jpg"
                  alt="James"
                />
                <div>
                  <span className="team-user-name">James</span>
                  <span className="team-user-handle">@jamdev</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="testimonial-column">
            <div className="team-testimonial-card">
              <img src={quote} alt="" />
              <blockquote>
                Frontend Masters I've had a license for at least 4 years now.
                Got one for all my team when I was a team lead. The content is
                first class and the price is very cheap especially considering
                what you would pay to take that workshop in person.
              </blockquote>
              <div className="team-testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Debbie O'Brien"
                />
                <div>
                  <span className="team-user-name">Debbie O'Brien</span>
                  <span className="team-user-handle">@debs_obrien</span>
                </div>
              </div>
            </div>

            <div className="team-testimonial-card">
              <img src={quote} alt="" />
              <blockquote>
                If you want deep knowledge and real-world frontend guidance,
                this is the place.
              </blockquote>
              <div className="team-testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  alt="Leo"
                />
                <div>
                  <span className="team-user-name">Leo</span>
                  <span className="team-user-handle">@leoworks</span>
                </div>
              </div>
            </div>
          </div>

        
          <div className="testimonial-column">
            <div className="team-testimonial-card">
              <img src={quote} alt="" />
              <blockquote>
                Our team got a Frontend Masters subscription and it has been
                super helpful, especially for the new devs on our team who
                aren't as familiar with frontend technologies. I highly
                recommend giving them a try. 😊
              </blockquote>
              <div className="team-testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Augustus"
                />
                <div>
                  <span className="team-user-name">Augustus</span>
                  <span className="team-user-handle">@augburto</span>
                </div>
              </div>
            </div>

            <div className="team-testimonial-card">
              <img src={quote} alt="" />
              <blockquote>
                Hands down, the most complete and well-structured frontend
                content.
              </blockquote>
              <div className="team-testimonial-user">
                <img
                  src="https://randomuser.me/api/portraits/women/48.jpg"
                  alt="Clara"
                />
                <div>
                  <span className="team-user-name">Clara</span>
                  <span className="team-user-handle">@claracodes</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* for backup */}
    </>
  );
};
