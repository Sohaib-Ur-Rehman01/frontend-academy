import "./css/videoSection.css";
export const VideoSection = () => {
  return (
    <>
      <div className="content videoSECTION">
        <div className="hero-container">
          <div className="text-section">
            <h1 className="headingContent">Learn From the Best Teachers</h1>
            <p className="hero-description">
              At Frontend Masters, we pride ourselves on offering courses
              designed and taught by leading experts actively employing their
              skills at renowned companies such as Netflix, Spotify, Google, and
              Stripe. Our curriculum is continually refreshed to align with the
              most recent advancements, guaranteeing that our learners are
              equipped with industry-standard best practices and cutting-edge
              techniques.
            </p>
            <div className="button-container">
              <button className="videosectionbtn">Browse Our Courses</button>
              <button className="learningpathbtn">View Learning Paths</button>
            </div>
          </div>

          <div className="video-section">
            <video
              className="promo-video"
              src="https://static.frontendmasters.com/assets/videos/promo/FEMpromoV8/720.mp4"
              poster="https://static.frontendmasters.com/assets/videos/promo/FEMpromoV8/posterframe.webp"
              controls
              muted
              loop
              playsInline
            />
          </div>
        </div>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">In-Depth Courses</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">21</div>
            <div className="stat-label">Learning Paths</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">—</div>
            <div className="stat-label">Industry Leading Experts</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">—</div>
            <div className="stat-label">Live Interactive Workshops</div>
          </div>
        </div>
      </div>
    </>
  );
};
