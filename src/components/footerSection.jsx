import "./css/footer.css";
import x from "../assets/x.svg";
import instagramLogo from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkdin from "../assets/linkdin.svg";
import appleStoreLogo from "../assets/appleappstore.svg";
import googlePlayStoreLogo from "../assets/googleplaystoreLogo.svg";
import logo from "../assets/frontendMasterlogo.svg";
export const FooterSection = () => {
  return (
    <>
      <div className="con-main-footer">
        <div className="main-container">
          <div className="s-container">
            <div className="container">
              <div className="linksAndLogo">
                <div>
                  <img src={logo} alt="" className="logo" />
                </div>
                <div className="nav">
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
                </div>
              </div>
            </div>
            <div className="social-apps-icons">
              <div className="icons">
                <div>
                  <img src={instagramLogo} alt="" />
                </div>
                <div>
                  <img src={x} alt="" />
                </div>
                <div>
                  <img src={linkdin} alt="" />
                </div>
                <div>
                  <img src={facebook} alt="" />
                </div>
              </div>
              <div className="googleAndAppStore">
                <div className="appstore">
                  <img src={appleStoreLogo} alt="" />
                </div>
                <div className="googlestore">
                  <img src={googlePlayStoreLogo} alt="" />
                </div>
              </div>
              <div className="contact">
                Contact:
                <a href="mailto:support@frontendmasters.com">
                  support@frontendmasters.com
                </a>
              </div>
            </div>
          </div>
          <hr className="divider" />
          <div className="buttom-container">
            <div className="minneapolis">
              Frontend Masters is proudly made in Minneapolis, MN
            </div>
            <div className="minneapolis">
              © 2025 Frontend Masters .<a href="#">Terms of service</a>.{" "}
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////resfooterformediumdevices start */}
        <div className="res-footer-main-container">
          <div className="foot-res-img">
            <img src={logo} alt="" className="res-foot-image" />
          </div>
          <div className="footer-nav-link">
            <div className="res-nav-foot">
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
            </div>
          </div>
          <div className="res-footer-social-icons">
            <div>
              <img src={instagramLogo} alt="" />
            </div>
            <div>
              <img src={x} alt="" />
            </div>
            <div>
              <img src={linkdin} alt="" />
            </div>
            <div>
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="res-footer-store">
            <div className="appstore">
              <img src={appleStoreLogo} alt="" />
            </div>
            <div className="googlestore">
              <img src={googlePlayStoreLogo} alt="" />
            </div>
          </div>
          <div className="res-footer-contact">
            <span>Contact:</span>
            <a href="mailto:support@frontendmasters.com">
              support@frontendmasters.com
            </a>
          </div>
          <hr className="divider" />
          <div className="buttom-container">
            <div className="minneapolis">
              Frontend Masters is proudly made in Minneapolis, MN
            </div>
            <div className="minneapolis">
              © 2025 Frontend Masters .<a href="#">Terms of service</a>.{" "}
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////resfooterformediumdevices end*/}
    </>
  );
};
