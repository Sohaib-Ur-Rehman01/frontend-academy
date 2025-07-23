import "./css/techSection.css";
export const TechSection = () => {
  return (
    <>
      <div className="frontend-masters-section">
        <div className="container">
          <section className="hero">
            <div className="live-event-banner">
              <b> Join us live online!</b>
              <b className="devsetup">AI Developer Setup</b> on Jul 30, 2025.
            </div>
          </section>
        </div>
      </div>
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ tech section completed */}

      <div className="tech-section">
        <h1>Gain Practical Tech Skills from Experts You Can Trust</h1>
        <p className="subheading">
          JavaScript, React, and TypeScript to Node.js and Backend (Go, Git,
          Docker, & More)
        </p>

        <div className="tech-icons">
          <div className="icon-circle">
            <svg viewBox="0 0 630 630" className="tech-icon">
              <rect width="630" height="630" fill="#F7DF1E" />
              <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
            </svg>
          </div>

          <div className="icon-circle">
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="tech-icon">
              <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
              <g stroke="#61dafb" stroke-width="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          </div>

          <div className="icon-circle">
            <svg viewBox="0 0 128 128" className="tech-icon">
              <path
                fill="#007acc"
                d="M2,63.91v62.5h125v-125H2V63.91Zm89.19-36.25V55.7H66.39v41.58H47.57V55.7H20.75V27.66h70.44Z"
              />
              <path
                fill="#fff"
                d="M20.75 27.66h70.44v28.04H47.57v41.58H66.39V55.7h22.81v72.71H20.75z"
              />
            </svg>
          </div>

          <div className="icon-circle">
            <svg viewBox="0 0 128 128" className="tech-icon">
              <path
                fill="#83CD29"
                d="M112.44 62.11c0-10.61-5.72-16.78-16.83-16.78h-16.83v16.78h5.61v-10.5h9.61c5.61 0 7.22 2.8 7.22 6.72v17.17c0 3.92-1.61 6.72-7.22 6.72h-9.61v5.61h9.61c11.11 0 16.83-6.17 16.83-16.78v-17.17zM72.06 45.33H55.22v37.17h5.61V56.94h11.22c11.11 0 16.83-6.17 16.83-16.78V23c0-10.61-5.72-16.78-16.83-16.78H55.22v16.78h16.83v10.5H55.22v16.78h16.83zm0-28.28H55.22v10.5h16.83V17.05z"
              />
              <path
                fill="#83CD29"
                d="M64 3.5c-33.5 0-60.5 27-60.5 60.5s27 60.5 60.5 60.5 60.5-27 60.5-60.5-27-60.5-60.5-60.5zm0 117.33c-31.38 0-56.83-25.45-56.83-56.83s25.45-56.83 56.83-56.83 56.83 25.45 56.83 56.83-25.45 56.83-56.83 56.83z"
              />
            </svg>
          </div>

          <div className="icon-circle">
            <svg viewBox="0 0 128 128" className="tech-icon">
              <path
                fill="#CB3837"
                d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V51.07h6.89v23.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V51.07h6.89v23.86h6.89V51.07h6.89v23.86h13.78V45.79z"
              />
            </svg>
          </div>

          <div className="icon-circle">
            <svg viewBox="0 0 128 128" className="tech-icon">
              <path
                fill="#00ACD7"
                d="M64 0l54.56 32v64L64 128 9.44 96V32L64 0zm-9.44 16.67L18.89 45.33v37.34l35.67 20.66 35.67-20.66V45.33L54.56 24.89v37.34H36.44V16.67h18.12z"
              />
              <path fill="#00ACD7" d="M36.44 16.67v45.34h18.12V16.67H36.44z" />
            </svg>
          </div>
        </div>

        <div className="learning-paths">
          Popular Learning Paths: <span className="path">Beginner</span> •{" "}
          <span className="path">Professional</span> •
          <span className="path">Fullstack</span>
        </div>
      </div>
    </>
  );
};
