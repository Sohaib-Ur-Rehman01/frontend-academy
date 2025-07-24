import "./css/footer.css";
import x from "../assets/x.svg";
import instagramLogo from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkdin from "../assets/linkdin.svg";
import appleStoreLogo from "../assets/appleappstore.svg";
import googlePlayStoreLogo from "../assets/googleplaystoreLogo.svg";
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
          </div>
          <div className="footer-social-apps">
            <div className="footer-social">
              {/* Social Icons */}
              <a href="#" className="footer-icon" title="X">
                {/* X (Twitter) SVG */}
                <img src={x} alt="" />
              </a>
              <a href="#" className="footer-icon" title="LinkedIn">
                <img src={linkdin} alt="" />
              </a>
              <a href="#" className="footer-icon" title="Facebook">
                <img src={facebook} alt="" />
              </a>
              <a href="#" className="footer-icon" title="Instagram">
                <img src={instagramLogo} alt="" />
              </a>
            </div>
            <div className="footer-apps">
              <a href="#" className="footer-app-btn">
                <img src={googlePlayStoreLogo} alt="App Store" />
              </a>
              <a href="#" className="footer-app-btn">
                <img src={appleStoreLogo} alt="Google Play" />
              </a>
            </div>
            <div className="footer-contact">
              Contact:
              <a href="mailto:support@frontendmasters.com">
                support@frontendmasters.com
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-made">
            Frontend Masters is proudly made in Minneapolis, MN
          </div>
          <div className="footer-terms">
            © 2025 Frontend Masters ·{""}
            <a href="#">Terms of Service</a>·{""}
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};
