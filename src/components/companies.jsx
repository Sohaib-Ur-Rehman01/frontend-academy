import "./css/companies.css";
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
            <svg width="48" height="48" viewBox="0 0 48 48">
              <rect x="2" y="2" width="20" height="20" fill="#888" />
              <rect x="26" y="2" width="20" height="20" fill="#888" />
              <rect x="2" y="26" width="20" height="20" fill="#888" />
              <rect x="26" y="26" width="20" height="20" fill="#888" />
            </svg>
            <span>Microsoft</span>
          </div>
          <div className="expert-logo">
            {/* Netflix SVG */}
            <svg width="90" height="48" viewBox="0 0 90 48">
              <text
                x="0"
                y="38"
                fontFamily="monospace"
                fontWeight="bold"
                fontSize="40"
                fill="#888"
              >
                NETFLIX
              </text>
            </svg>
          </div>
          <div className="expert-logo">
            {/* Stripe SVG */}
            <svg width="80" height="48" viewBox="0 0 80 48">
              <text
                x="0"
                y="38"
                fontFamily="sans-serif"
                fontWeight="bold"
                fontSize="40"
                fill="#888"
              >
                stripe
              </text>
            </svg>
          </div>
          <div className="expert-logo">
            {/* Spotify SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="#888" />
              <text
                x="50"
                y="38"
                fontFamily="sans-serif"
                fontWeight="bold"
                fontSize="32"
                fill="#888"
                style={{ letterSpacing: "-2px" }}
              ></text>
            </svg>
            <span>Spotify</span>
          </div>
        </div>
        <button className="expert-btn">Get Full Access</button>
      </div>
    </>
  );
};
