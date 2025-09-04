import Accordion from "react-bootstrap/Accordion";
import "../components/css/featuresSection.css";
import logo from "../assets/frontendMasterlogo.svg";

function Pricinaccordion() {
  return (
    <div className="accordion-main-container">
      <div className="accordion-div-con">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How do your subscription plans work?{" "}
            </Accordion.Header>
            <Accordion.Body>
              We offer individual subscriptions on a monthly or yearly basis,
              and if you have a team, check out our info on.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do you offer a free trial?</Accordion.Header>
            <Accordion.Body>
              We offer a free trial to first-time subscribers. You can find more
              about the trial{" "}
              <a href="#" className="acc-a">
                here
              </a>
              .
              <br />
              <br />
              We also have the following opportunities to learn for free:
              <br />
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
                  <a href="#" className="acc-a">
                    create a free account
                  </a>{" "}
                  to gain access to five full courses for free.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Do you have discounts for students?{" "}
            </Accordion.Header>
            <Accordion.Body>
              We are part of the{" "}
              <a href="#" className="acc-a">
                GitHub Student Developer Pack
              </a>{" "}
              , allowing students six months of free access to the entire
              platform.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Can I pay for an individual course?
            </Accordion.Header>
            <Accordion.Body>
              We don’t sell individual courses — every course we produce comes
              included with a subscription to the site.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What are the different payment methods available for a Frontend
              Masters subscription?
            </Accordion.Header>
            <Accordion.Body>
              We offer the ability to pay by Credit Card (processed through
              Stripe), PayPal, or you may pay through the Apple store using our
              app.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Do you offer special rates for people from countries with low
              purchasing power?{" "}
            </Accordion.Header>
            <Accordion.Body>
              You may inquire about international, low purchasing power rates by
              emailing
              <a href="#" className="acc-a">
                support@frontendmasters.com
              </a>
              .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Do you offer a discount to veterans?
            </Accordion.Header>
            <Accordion.Body>
              Not directly, but we financially support Vets Who Code and provide
              access to our curriculum. Check out the{" "}
              <a href="#" className="acc-c">
                Vets Who Code
              </a>
              website for more information.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>What is your refund policy?</Accordion.Header>
            <Accordion.Body>
              We are glad that you decided to try us out! If you are not happy
              with the service (for any reason), please contact ,
              <a href="#" className="acc-a">
                support@frontendmasters.com ,
              </a>
              to request a full refund.
              <br />
              <br />
              Refunds are available for Individual subscriptions for the initial
              subscription period only. You have 10 days (less any trial days)
              to request a refund for monthly subscriptions, or 30 days (less
              any trial days) to request a refund for annual subscriptions.
              Refunds are not available for upgrades or renewals unless the
              request is made within 24 hours of payment and no course material
              has been accessed in that time.
              <br />
              <br />
              Refunds are available for Team subscriptions for the initial
              subscription period only. You have 10 days (less any trial days)
              to request a refund for monthly or annual subscriptions. Refunds
              are not available for unused team seats.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Pricinaccordion;
