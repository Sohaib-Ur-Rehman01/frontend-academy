import Accordion from "react-bootstrap/Accordion";
import "../components/css/featuresSection.css";
import logo from "../assets/frontendMasterlogo.svg";

function AccordionComponent() {
  return (
    <div className="accordion-main-container">
      <div className="accordion-div-con">
        <div className="logo-icon-accordion">
          <img src={logo} alt="logo-accordion" />
          <h1 className="accordion-main-heading">Frequently Asked Questions</h1>
        </div>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the difference between a workshop and a course?
            </Accordion.Header>
            <Accordion.Body>
              Workshops are live-streamed events where members can participate
              and ask questions in the chatroom. Replays of these events are
              available in unedited form until the the final, full-featured
              course is edited and released. The final course is broken into
              sections and lessons and has additional enhancements such as
              annotations containing useful links, Q&A, progress tracking, and
              bookmarking.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How long does it take for a course to be released?
            </Accordion.Header>
            <Accordion.Body>
              Workshops take about one month to be edited and released as a full
              course.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can courses be downloaded? </Accordion.Header>
            <Accordion.Body>
              Members can download courses with our Android and iOS apps, which
              are ideal for mobile and offline learning. course.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How often do you update your courses?{" "}
            </Accordion.Header>
            <Accordion.Body>
              A course is updated once there is a fundamental shift in the
              language or library’s underlying API. You can check our{" "}
              <a href="#" className="acc-a">
                workshop list
              </a>{" "}
              to see if a new version of a given course is on the schedule. You
              may also write to us as{" "}
              <a href="#" className="acc-a">
                support@frontendmasters.com
              </a>{" "}
              with suggestions for updates.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Do you offer certificates of completion?{" "}
            </Accordion.Header>
            <Accordion.Body>
              You can download certificates of completion from the Completed
              Courses list in your Learning Library. Click the diploma icon next
              to the course to download the certificate in light or dark mode. A
              link to your Public Profile is included on each certificate if
              you’ve created one. Public Profiles showcase your learning journey
              and are a fantastic way to share progress with friends,
              co-workers, or employers. Public Profiles are available to members
              with an active Frontend Masters subscription who have watched ten
              or more hours of content. Visit the Public Profile section in My
              Account to get started.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Do you offer a free trial? </Accordion.Header>
            <Accordion.Body>
              We offer a free trial to first-time subscribers. You can find more
              about the trial{" "}
              <a href="#" className="acc-a">
                here
              </a>
              <br />
              <br />
              We also have the following opportunities to learn for free:
              <ul>
                <li>
                  The{" "}
                  <a href="#" className="acc-a">
                    online bootcamp
                  </a>{" "}
                  is a free, two-week curriculum to get you started with web
                  development.
                </li>
                <li>
                  You can{" "}
                  <a href="#" className="acc-c">
                    create a free account
                  </a>{" "}
                  to gain access to five full courses for free.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Do you offer a student discount?{" "}
            </Accordion.Header>
            <Accordion.Body>
              We partner with the
              <a href="#" className="acc-c">
                GitHub Student Developer Pack
              </a>
              to offer students six months of free access to the Frontend
              Masters platform. You can read more about our partnership on our
              <a href="#" className="acc-c">
                GitHub Student Developer Pack
              </a>{" "}
              page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Do you have team plans? </Accordion.Header>
            <Accordion.Body>
              Yes! Read more about our team plans{" "}
              <a href="#" className="acc-c">
                here
              </a>
              .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="need-box">
          <div className="email-icon">
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
          <div className="help-message">
            <p>
              Still need help?{" "}
              <a href="#" className="help-email">
                support@frontendmasters.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionComponent;
