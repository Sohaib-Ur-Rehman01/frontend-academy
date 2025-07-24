import "./css/companies.css";
import micorsoft from "../assets/microsoft.svg";
import netflix from "../assets/netflix.svg";
import strip from "../assets/stripe.svg";
import spotify from "../assets/spotify.svg";
export const CompaniesSection = () => {
  return (
    <>
      <div className="expert-section">
        <h1 className="expert-heading">
          Learn Straight from Experts Who Shape the Modern Web
        </h1>
        <h2 className="expert-subheading">
          Our courses are taught by developers from these top companies (and
          more)
        </h2>
        <div className="expert-logos">
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
        <button className="expert-btn">Get Full Access</button>
      </div>
    </>
  );
};
