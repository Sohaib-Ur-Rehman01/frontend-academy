import "./css/footer.css";
export const FooterSection = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo">
              Frontend<span className="footer-logo-red">Masters</span>
            </span>
            <nav className="footer-nav">
              <a href="#">Courses</a>
              <a href="#">Learn</a>
              <a href="#">Workshops</a>
              <a href="#">Topics</a>
              <a href="#">Teachers</a>
              <a href="#">Reviews</a>
              <a href="#">Guides</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">Login</a>
              <a href="#">Join Now</a>
            </nav>
            <div className="footer-made">
              Frontend Masters is proudly made in Minneapolis, MN
            </div>
          </div>
          <div className="footer-social-apps">
            <div className="footer-social">
              {/* Social Icons */}
              <a href="#" className="footer-icon" title="X">
                {/* X (Twitter) SVG */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                  <path
                    d="M7 7l18 18M25 7L7 25"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a href="#" className="footer-icon" title="LinkedIn">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect width="32" height="32" rx="8" fill="#0077b5" />
                  <path
                    d="M10 13h3v9h-3v-9zm1.5-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 3h3v1.3c.4-.7 1.3-1.3 2.2-1.3 2.3 0 2.8 1.5 2.8 3.4v5.6h-3v-5c0-1.2-.4-2-1.4-2s-1.6.8-1.6 2v5h-3v-9z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="#" className="footer-icon" title="Facebook">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect width="32" height="32" rx="8" fill="#1877f3" />
                  <path
                    d="M21 11h-2c-.6 0-1 .4-1 1v2h3l-.5 3h-2.5v7h-3v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="#" className="footer-icon" title="Instagram">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect
                    width="32"
                    height="32"
                    rx="8"
                    fill="url(#ig-gradient)"
                  />
                  <defs>
                    <linearGradient
                      id="ig-gradient"
                      x1="0"
                      y1="0"
                      x2="32"
                      y2="32"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fd5" />
                      <stop offset="1" stopColor="#f5438a" />
                    </linearGradient>
                  </defs>
                  <circle cx="16" cy="16" r="7" fill="#fff" />
                  <circle cx="16" cy="16" r="5" fill="#f5438a" />
                  <circle cx="22" cy="10" r="1.5" fill="#fff" />
                </svg>
              </a>
            </div>
            <div className="footer-apps">
              <a href="#" className="footer-app-btn">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
              <a href="#" className="footer-app-btn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
            </div>
            <div className="footer-contact">
              Contact:{" "}
              <a href="mailto:support@frontendmasters.com">
                support@frontendmasters.com
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span>
            © 2025 Frontend Masters · <a href="#">Terms of Service</a> ·{" "}
            <a href="#">Privacy Policy</a>
          </span>
        </div>
      </footer>
    </>
  );
};
