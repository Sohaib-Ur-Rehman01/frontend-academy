import "./css/testimonial.css";
import quote from "../assets/quote.svg";
export const TestimonialsSection = () => {
  return (
    <>
      <div className="test-main-container">
        <div className="testimonial-main-container">
          <h2 className="heading">What They're Saying About Us</h2>
          <div className="card">
            <div className="testimonials">
              <img src={quote} alt="" className="image" />
              <div className="content-profile">
                <p>
                  I'm truly impressed with the quality of the instructors,
                  top-notch! Also, the casual tone of the course is great
                  because it's suitable for all levels and still keeps your
                  attention without being too boring or academic. Everything
                  runs super smoothly and the transcriptions are a huge plus –
                  so helpful! Loving it all! 🤩
                </p>
              </div>
              <div className="profile">
                <img
                  src="https://cdn.senja.io/public/media/0fc42059-4a14-45b9-979a-3a7f540d9057_fc777113-0f99-48f0-ad71-301e75fe4b56_1684278076786.jpeg"
                  alt="Rita Iglesias Gandara"
                />
                <span>Rita Iglesias Gandara</span>
              </div>
            </div>
            <div className="testimonials">
              <img src={quote} alt="" className="image" />
              <div className="content-profile">
                <p>
                  There isn't another place that has the same quality and is
                  consistent in quality across all courses as Frontend Masters.
                </p>
              </div>
              <div className="profile">
                <img src="https://cdn.senja.io/public/media/95a01823-99b4-41c7-ab4c-0412ecb1c696_dcbae3c9-f148-4abf-88d2-b8e5247dbf18_7maAfFeI_400x400.jpg" />
                <span>Rita Iglesias Gandara</span>
                <p style={{ color: "white", fontSize: "42px" }}></p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="testimonials">
              <img src={quote} alt="" className="image" />
              <div className="content-profile">
                <p>
                  TBH I owe my entire career to Frontend Masters, content is
                  GOLD, usually explained and taught by top notch devs. IMHO
                  worth every penny 😃
                </p>
              </div>
              <div className="profile">
                <img
                  src="https://pbs.twimg.com/profile_images/1595794032457826305/t1iSVoIf.jpg"
                  alt="Robert Borghesi"
                />
                <span>Robert Borghesi</span>
              </div>
            </div>
            <div className="testimonials">
              <img src={quote} alt="" className="image" />
              <div className="content-profile">
                <p>
                  There isn't another place that has the same quality and is
                  consistent in quality across all courses as Frontend Masters.
                </p>
              </div>
              <div className="profile">
                <img
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt="Faurzan"
                />
                <span>Faurzan</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="testimonials">
              <img src={quote} alt="" className="image" />
              <div className="content-profile">
                <p>
                  TBH I owe my entire career to Frontend Masters, content is
                  GOLD, usually explained and taught by top notch devs. IMHO
                  worth every penny 👀
                </p>
              </div>
              <div className="profile">
                <img src="https://pbs.twimg.com/profile_images/1595794032457826305/t1iSVoIf.jpg" />
                <span>Rita Iglesias Gandara</span>
              </div>
            </div>
            <div className="testimonials">
              <img src={quote} alt="" className="image" />
              <div className="content-profile">
                <p>
                  Frontend Masters should be in every developers tool kit.{" "}
                  <br /> - Wide range of course topics <br /> - World class
                  teachers <br /> - Full learning paths to go from zero to hero.
                </p>
              </div>
              <div className="profile">
                <img src="https://cdn.senja.io/public/media/874c87ef-71df-4b7b-8bfe-b6cc7a9bd325_268be879-ff6d-4f01-bcf9-ac1d3b09b371_9xzR7uvQ_400x400.jpg" />
                <span>Rita Iglesias Gandara</span>
              </div>
            </div>
          </div>
          <div className="btn">
            <div>
              <button className="buttonShow">Show More </button>
            </div>
            <div className="arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8571 9.42855C18.8571 9.6607 18.7723 9.86159 18.6026 10.0312l-6 6C12.433 16.2009 12.2321 16.2857 12 16.2857 11.7678 16.2857 11.5669 16.2009 11.3973 16.0312l-6.00001-6C5.22764 9.86159 5.14282 9.6607 5.14282 9.42855 5.14282 9.19641 5.22764 8.99552 5.39729 8.82588 5.56693 8.65623 5.76782 8.57141 5.99997 8.57141H18C18.2321 8.57141 18.433 8.65623 18.6026 8.82588 18.7723 8.99552 18.8571 9.19641 18.8571 9.42855z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
