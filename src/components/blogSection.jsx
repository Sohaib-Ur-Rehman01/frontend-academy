import React from "react";
import "../components/css/blogSection.css";
import { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import logo from "../assets/frontendMasterlogo.svg";
import { FiRss } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import bannerImage from "../assets/containers.webp";
import blogcardsearchbarimage from "../assets/cardimage.webp";
import bluecardImage from "../assets/bluecard.webp";
import infinitecardImage from "../assets/logos.webp";
import nonlogicalcardImage from "../assets/logical.webp";
import glassImage from "../assets/Liquid-Glass-on-the-Web.webp";
import seventhcardImage from "../assets/The-Figcaption-Problem.webp";
import beatcontentImage from "../assets/sidepic.jpg";
import butterflyImage from "../assets/butterfly.svg";
import articleimage from "../assets/thumbnail.jpg";
import heart from "../assets/heart.svg";
import ArticleCard from "../components/article";
import { Link } from "react-router-dom";
import CodeBlock from "./code";

function BlogSectionNavbar() {
  const [copied, setCopied] = useState(false);
  const codeText = `
.page-wrap {
  max-width: 800px;
  margin: 0 auto;
}
`;
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2s me reset
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const categories = [
    { id: 1, name: "CSS" },
    { id: 2, name: "JAVASCRIPT" },
    { id: 3, name: "HTML" },
    { id: 4, name: "TYPOGRAPHY" },
    { id: 5, name: "DESIGN" },
    { id: 6, name: "SVG" },
    { id: 7, name: "PERFORMANCE" },
    { id: 8, name: "COLOR" },
    { id: 9, name: "WEB COMPONENTS" },
    { id: 10, name: "SCROLL-DRIVEN ANIMATIONS" },
  ];
  return (
    <>
      <section className="blog-section-navbar">
        <div className="blog-section-navbar-main-container">
          <div className="blog-section-nav-links">
            <div className="blog-section-logo">
              <Link to="/">
                <HiOutlineArrowNarrowLeft />
              </Link>
              <Link to="/">Back to FrontendMasters.com</Link>
            </div>
            <div className="blog-nav">
              <Link to="#">Courses</Link>
              <Link to="#">Become a Member</Link>
              <Link to="#">Guest Writing</Link>
              <div className="rss-btn">
                <button>
                  <FiRss />
                  RSS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-section-responsive-navbar-medium-screen-main-container">
          <div className="responsive-logo-div">
            <div className="blog-section-logo">
              <Link to="/">
                <HiOutlineArrowNarrowLeft />
              </Link>
              <Link to="/">Back to FrontendMasters.com</Link>
            </div>
          </div>
          <div className="responsive-blog-nav">
            <Link to="#">Courses</Link>
            <Link to="#">Become a Member</Link>
            <Link to="#">Guest Writing</Link>

            <div className="rss-btn">
              <button>
                <FiRss />
                RSS
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section-hero-section">
        <div className="blog-section-hero-section-main-container">
          <div className="blog-image-logo-main-container">
            <div>
              <img src={logo} alt="blog-image" className="blog-img" />
            </div>
            <div>
              <p className="blog">/Blog</p>
            </div>
          </div>
          <div className="tag-links-main-container">
            <div className="container">
              <div className="tags-box">
                {categories.map((item) => (
                  <div className="tag" key={item.id}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="searchicon">
              <FiSearch />
            </div>
          </div>
          <div className="blog-section-banner-image-and-content-main-container">
            <div className="blog-section-banner-content-main-conatiner">
              <p className="featured">FEATURED</p>
              <h1 className="blog-section-banner-title">
                A Nice Vanilla App Architecture Using Web Components and CSS
                Module Scripts
              </h1>
              <p className="blog-section-banner-description">
                CSS module scripts help keep the dream of co-locating files that
                all relate to a component, without needing a bundler.
              </p>
              <p className="blog-section-banner-date">
                By <a>Chris Coyier</a> on August 11, 2025
              </p>
            </div>
            <div className="blog-section-banner-image-main-container">
              <img src={bannerImage} alt="" />
            </div>
          </div>

          <div className="blog-section-main-container">
            <div className="left-section-flex-container">
              <div className="blog-sidebar-container">
                <div className="popular-section">
                  <div className="popular-header">
                    <h3>Popular</h3>
                    <hr />
                  </div>
                  <div className="popular-posts">
                    <div className="popular-post">
                      <a href="#" className="popular-post-title">
                        Introducing Zustand (State Management)
                      </a>
                      <div className="popular-post-meta">
                        July 21, 2025 · Adam Rackis
                      </div>
                    </div>
                    <div className="popular-post">
                      <a href="#" className="popular-post-title">
                        Liquid Glass on the Web
                      </a>
                      <div className="popular-post-meta">
                        July 28, 2025 · Chris Coyier
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-articles-container">
                <div className="latest-header">
                  <h3>Latest Articles</h3>
                  <hr />
                </div>

                <div className="article-cards">
                  {/* Article 1 */}
                  <div className="article-card">
                    <div className="article-thumbnail">
                      <img
                        src={blogcardsearchbarimage}
                        alt="Using the Custom Highlight API"
                        className="card-image"
                      />
                    </div>
                    <div className="article-content-blog">
                      <div className="article-tags">
                        <span className="tag">JavaScript</span>
                        <span className="tag">Range()</span>
                      </div>
                      <h2 className="article-title">
                        <a href="#">Using the Custom Highlight API</a>
                      </h2>
                      <div className="article-meta">
                        By <span className="author">Chris Coyier</span> on{" "}
                        <span className="date">August 7, 2025</span>
                      </div>
                      <p className="article-excerpt">
                        You can get your hands on ranges of text in JavaScript,
                        then apply a named "highlight" on them, so you can style
                        that range in CSS with no other selector necessary.
                      </p>
                    </div>
                  </div>

                  {/* Article 2 */}
                  <div className="article-card">
                    <div className="article-thumbnail">
                      <img
                        src={bluecardImage}
                        alt="Get the number of auto-fit/auto-fill columns in CSS"
                        className="card-image"
                      />
                    </div>
                    <div className="article-content-blog">
                      <div className="article-tags">
                        <span className="tag">CSS</span>
                        <span className="tag">Design</span>
                        <span className="tag">Grid</span>
                        <span className="tag">Layout</span>
                      </div>
                      <h2 className="article-title">
                        <a href="#">
                          Get the number of auto-fit/auto-fill columns in CSS
                        </a>
                      </h2>
                      <div className="article-meta">
                        By <span className="author">Ana Tudor</span> on{" "}
                        <span className="date">August 6, 2025</span>
                      </div>
                      <p className="article-excerpt">
                        The whole point of auto-fit and auto-fill is that you
                        aren't saying how many columns to use. But if you knew
                        how many the browser chose, you can make nice design
                        decisions.
                      </p>
                    </div>
                  </div>

                  {/* Article 3 */}
                  <div className="article-card">
                    <div className="article-thumbnail">
                      <img
                        src={infinitecardImage}
                        alt="Infinite Marquee Animation using Modern CSS"
                        className="card-image"
                      />
                    </div>
                    <div className="article-content-blog">
                      <div className="article-tags">
                        <span className="tag">Animation</span>
                        <span className="tag">Carousels</span>
                        <span className="tag">CSS</span>
                        <span className="tag">sibling-index()</span>
                        <span className="tag">slider</span>
                      </div>
                      <h2 className="article-title">
                        <a href="#">
                          Infinite Marquee Animation using Modern CSS
                        </a>
                      </h2>
                      <div className="article-meta">
                        By <span className="author">Temani Afif</span> on{" "}
                        <span className="date">August 4, 2025</span>
                      </div>
                      <p className="article-excerpt">
                        A row of logos that animate forever perfectly and don't
                        have any duplicated HTML or JavaScript at all is quite a
                        trick. Thanks modern CSS!
                      </p>
                    </div>
                  </div>

                  {/* Article 4 */}
                  <div className="article-card">
                    <div className="article-thumbnail">
                      <img
                        src={nonlogicalcardImage}
                        alt="Should we NEVER use non-logical properties?"
                        className="card-image"
                      />
                    </div>
                    <div className="article-content-blog">
                      <div className="article-tags">
                        <span className="tag">CSS</span>
                        <span className="tag">Logical Properties</span>
                      </div>
                      <h2 className="article-title">
                        <a href="#">
                          Should we NEVER use non-logical properties?
                        </a>
                      </h2>
                      <div className="article-meta">
                        By <span className="author">Chris Coyier</span> on{" "}
                        <span className="date">July 31, 2025</span>
                      </div>
                      <p className="article-excerpt">
                        Best bet: just always use them. More nuanced take: there
                        is a few situations where using the physical property is
                        still relevant.
                      </p>
                    </div>
                  </div>

                  {/* Article 5 - Full Width Quiz Section */}
                  <div className="article-card quiz-card">
                    <div className="article-card">
                      <div className="blog-quiz-section-main-container">
                        <h1>Not sure where to get started?</h1>
                        <p>
                          Answer three short questions and we'll recommend the
                          best learning path for your experience level and goals
                        </p>
                        <button>Take the Quiz</button>
                      </div>
                    </div>
                  </div>

                  {/* Article 6 */}
                  <div className="article-card">
                    <div className="article-thumbnail">
                      <img
                        src={glassImage}
                        alt="Should we NEVER use non-logical properties?"
                        className="card-image"
                      />
                    </div>
                    <div className="article-content-blog">
                      <div className="article-tags">
                        <span className="tag">CSS</span>
                        <span className="tag">Logical Properties</span>
                      </div>
                      <h2 className="article-title">
                        <a href="#">
                          Should we NEVER use non-logical properties?
                        </a>
                      </h2>
                      <div className="article-meta">
                        By <span className="author">Chris Coyier</span> on{" "}
                        <span className="date">July 31, 2025</span>
                      </div>
                      <p className="article-excerpt">
                        Best bet: just always use them. More nuanced take: there
                        is a few situations where using the physical property is
                        still relevant.
                      </p>
                    </div>
                  </div>

                  {/* Article 7 */}
                  <div className="article-card">
                    <div className="article-thumbnail">
                      <img
                        src={seventhcardImage}
                        alt="Infinite Marquee Animation using Modern CSS"
                        className="card-image"
                      />
                    </div>
                    <div className="article-content-blog">
                      <div className="article-tags">
                        <span className="tag">Animation</span>
                        <span className="tag">Carousels</span>
                        <span className="tag">CSS</span>
                        <span className="tag">sibling-index()</span>
                        <span className="tag">slider</span>
                      </div>
                      <h2 className="article-title">
                        <a href="#">
                          Infinite Marquee Animation using Modern CSS
                        </a>
                      </h2>
                      <div className="article-meta">
                        By <span className="author">Temani Afif</span> on{" "}
                        <span className="date">August 4, 2025</span>
                      </div>
                      <p className="article-excerpt">
                        A row of logos that animate forever perfectly and don't
                        have any duplicated HTML or JavaScript at all is quite a
                        trick. Thanks modern CSS!
                      </p>
                    </div>
                  </div>
                  <div className="older-post-button">
                    <div className="olderpostbtn">
                      <button>Older Post</button>
                    </div>
                    <div className="rightarrow">
                      <HiOutlineArrowNarrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="verticl">
              <div className="right-section-container">
                <div className="f-portion">
                  <div className="article-info-container">
                    <h2>THE BEAT</h2>
                    <hr />
                    <div className="beat-container">
                      <div className="beat-icon-container">
                        <a href="#" className="beat-icon">
                          CC
                        </a>
                        <a href="#" className="beat-icon-link">
                          <svg
                            class="icon-link"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m39.508 66.75c-1.6016 0-3.1992-0.61328-4.418-1.832-12.207-12.211-12.207-32.074 0-44.281l11.57-11.574c5.9141-5.9141 13.781-9.168 22.145-9.168 8.3633 0 16.227 3.2578 22.137 9.168 5.9141 5.9141 9.1758 13.781 9.1758 22.145s-3.2578 16.227-9.1758 22.137c-2.4453 2.4453-6.3945 2.4453-8.8359 0-2.4453-2.4453-2.4453-6.3984 0-8.8359 3.5508-3.5547 5.5117-8.2812 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-7.1055-7.1055-19.5-7.1055-26.605 0l-11.57 11.57c-7.332 7.3359-7.332 19.27 0 26.605 2.4453 2.4453 2.4453 6.3945 0 8.8359-1.2188 1.2266-2.8203 1.8359-4.418 1.8359zm-8.082 33.137c-8.3633 0-16.227-3.2578-22.137-9.1758-5.9141-5.9062-9.1758-13.773-9.1758-22.137s3.2578-16.227 9.168-22.137c2.4453-2.4453 6.3945-2.4453 8.8359 0 2.4453 2.4453 2.4453 6.3945 0 8.8359-3.5547 3.5508-5.5117 8.2812-5.5117 13.305s1.957 9.75 5.5117 13.301c7.1133 7.1055 19.492 7.1055 26.605 0l10.617-10.617c3.5508-3.5508 5.5117-8.2734 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-2.4453-2.4375-2.4453-6.3945 0-8.8359 2.4453-2.4453 6.3945-2.4453 8.8359 0 5.9141 5.9141 9.1758 13.773 9.1758 22.145 0 8.3633-3.2578 16.23-9.1758 22.137l-10.617 10.617c-5.9141 5.9141-13.773 9.168-22.137 9.168z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="beat-content">
                        <div className="auth-container">
                          <div className="auth-info white-bg">
                            <div className="article-header-main-container">
                              <div className="article-header">
                                <div className="img">
                                  <img
                                    src={beatcontentImage}
                                    alt=""
                                    className="auth-image"
                                  />
                                </div>
                                <div className="auth-content">
                                  <p className="auth-name">Bean Holmes</p>
                                  <p className="auth-title">@bholmes.dev</p>
                                </div>
                              </div>
                              <div className="article-header-butterfly-icon">
                                <img
                                  src={butterflyImage}
                                  alt=""
                                  className="butterlfy-image"
                                />
                              </div>
                            </div>
                            <div className="blog-article-description">
                              <p>
                                🔥 Mingcute has been my go-to icon library for a
                                while. - Open source and open license - "Cute"
                                and bubbly icon style with more options than
                                most - Really nice Figma plugin - Iconify
                                support to use in any web project
                              </p>
                            </div>
                            <div className="blog-article-image-container">
                              <img src={articleimage} alt="" />
                            </div>
                            <div className="datetime">
                              <a href="#">Aug 4, 2025 at 5:39</a>
                            </div>
                            <hr />
                            <div className="like-comment-reply-main-container">
                              <div className="like-comment-container">
                                <div className="like">
                                  <img src={heart} alt="" className="heart" />
                                  <p className="likecount">20</p>
                                </div>
                                <div className="like">
                                  <img src={heart} alt="" className="heart" />
                                  <p className="likecount">20</p>
                                </div>
                                <div className="like">
                                  <img src={heart} alt="" className="heart" />
                                  <p className="likecount">20</p>
                                </div>
                              </div>
                              <div className="replies-blusky">
                                <p> bluesky replies</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* second  */}
                  <div className="article-info-container">
                    <hr />
                    <div className="beat-container">
                      <div className="beat-icon-container">
                        <a href="#" className="beat-icon">
                          CC
                        </a>
                        <a href="#" className="beat-icon-link">
                          <svg
                            class="icon-link"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m39.508 66.75c-1.6016 0-3.1992-0.61328-4.418-1.832-12.207-12.211-12.207-32.074 0-44.281l11.57-11.574c5.9141-5.9141 13.781-9.168 22.145-9.168 8.3633 0 16.227 3.2578 22.137 9.168 5.9141 5.9141 9.1758 13.781 9.1758 22.145s-3.2578 16.227-9.1758 22.137c-2.4453 2.4453-6.3945 2.4453-8.8359 0-2.4453-2.4453-2.4453-6.3984 0-8.8359 3.5508-3.5547 5.5117-8.2812 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-7.1055-7.1055-19.5-7.1055-26.605 0l-11.57 11.57c-7.332 7.3359-7.332 19.27 0 26.605 2.4453 2.4453 2.4453 6.3945 0 8.8359-1.2188 1.2266-2.8203 1.8359-4.418 1.8359zm-8.082 33.137c-8.3633 0-16.227-3.2578-22.137-9.1758-5.9141-5.9062-9.1758-13.773-9.1758-22.137s3.2578-16.227 9.168-22.137c2.4453-2.4453 6.3945-2.4453 8.8359 0 2.4453 2.4453 2.4453 6.3945 0 8.8359-3.5547 3.5508-5.5117 8.2812-5.5117 13.305s1.957 9.75 5.5117 13.301c7.1133 7.1055 19.492 7.1055 26.605 0l10.617-10.617c3.5508-3.5508 5.5117-8.2734 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-2.4453-2.4375-2.4453-6.3945 0-8.8359 2.4453-2.4453 6.3945-2.4453 8.8359 0 5.9141 5.9141 9.1758 13.773 9.1758 22.145 0 8.3633-3.2578 16.23-9.1758 22.137l-10.617 10.617c-5.9141 5.9141-13.773 9.168-22.137 9.168z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="beat-content">
                        <div className="auth-container">
                          <div className="auth-info">
                            <div className="article-header-main-container"></div>
                            <div className="blog-article-description">
                              <p>
                                Did you know{" "}
                                <a href="#" style={{ color: "#e05855" }}>
                                  you can do height: stretch{" "}
                                </a>{" "}
                                now in CSS? Works for width too.
                                <br />
                                <br />
                                --
                                <i>
                                  <a href="#" style={{ color: "#e05855" }}>
                                    Dave Rupert
                                  </a>
                                </i>
                                <br />
                                <br />
                                The other day [Dave] shared a link to the new
                                stretch keyword in CSS – and I saw a lot of
                                questions about how it’s different from 100% (or
                                100vh when doing full-screen layouts). So I made
                                a quick video to show how these all work!
                              </p>
                            </div>

                            <div className="datetime">
                              --
                              <i>
                                <a href="#" style={{ color: "#e05855" }}>
                                  Miriam Suzanne
                                </a>
                              </i>
                            </div>
                            {/* <hr /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second  */}

                  {/* third  */}
                  <div className="article-info-container">
                    <hr />
                    <div className="beat-container">
                      <div className="beat-icon-container">
                        <a href="#" className="beat-icon">
                          CC
                        </a>
                        <a href="#" className="beat-icon-link">
                          <svg
                            class="icon-link"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m39.508 66.75c-1.6016 0-3.1992-0.61328-4.418-1.832-12.207-12.211-12.207-32.074 0-44.281l11.57-11.574c5.9141-5.9141 13.781-9.168 22.145-9.168 8.3633 0 16.227 3.2578 22.137 9.168 5.9141 5.9141 9.1758 13.781 9.1758 22.145s-3.2578 16.227-9.1758 22.137c-2.4453 2.4453-6.3945 2.4453-8.8359 0-2.4453-2.4453-2.4453-6.3984 0-8.8359 3.5508-3.5547 5.5117-8.2812 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-7.1055-7.1055-19.5-7.1055-26.605 0l-11.57 11.57c-7.332 7.3359-7.332 19.27 0 26.605 2.4453 2.4453 2.4453 6.3945 0 8.8359-1.2188 1.2266-2.8203 1.8359-4.418 1.8359zm-8.082 33.137c-8.3633 0-16.227-3.2578-22.137-9.1758-5.9141-5.9062-9.1758-13.773-9.1758-22.137s3.2578-16.227 9.168-22.137c2.4453-2.4453 6.3945-2.4453 8.8359 0 2.4453 2.4453 2.4453 6.3945 0 8.8359-3.5547 3.5508-5.5117 8.2812-5.5117 13.305s1.957 9.75 5.5117 13.301c7.1133 7.1055 19.492 7.1055 26.605 0l10.617-10.617c3.5508-3.5508 5.5117-8.2734 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-2.4453-2.4375-2.4453-6.3945 0-8.8359 2.4453-2.4453 6.3945-2.4453 8.8359 0 5.9141 5.9141 9.1758 13.773 9.1758 22.145 0 8.3633-3.2578 16.23-9.1758 22.137l-10.617 10.617c-5.9141 5.9141-13.773 9.168-22.137 9.168z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="beat-content">
                        <div className="auth-container">
                          <div className="auth-info">
                            <div className="article-header-main-container"></div>
                            <div className="blog-article-description">
                              <p>
                                To horizontally center an element and limit it’s
                                width, this is easily the most common approach:
                              </p>
                            </div>
                            {/* <div className="codeimage">
                              <div class="code-block">
                                <div class="code-header">
                                  <span>CSS</span>
                                  <button
                                    class="copy-btn"
                                    aria-label="Copy Code"
                                    onClick={handleCopy}
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="18px"
                                      viewBox="0 0 24 24"
                                      width="18px"
                                      fill="currentColor"
                                    >
                                      <path
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      ></path>
                                      <path
                                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 
               1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
               16H8V7h11v14z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <pre>
                                  <code class="language-css">
                                    <code className="hljs language-css">
                                      <span className="hljs-selector-class">
                                        .page-wrap
                                      </span>{" "}
                                      {"{"}
                                      <br />
                                      <span className="hljs-attribute">
                                        max-width
                                      </span>
                                      :{" "}
                                      <span className="hljs-number">800px</span>
                                      ;
                                      <br />
                                      <span className="hljs-attribute">
                                        margin
                                      </span>
                                      : <span className="hljs-number">0</span>{" "}
                                      auto;
                                      <br />
                                      {"}"}
                                    </code>
                                  </code>
                                </pre>
                              </div>
                            </div> */}
                            <CodeBlock
                              language="CSS"
                              code={`
.page-wrap {
  max-width: 800px;
  margin: 0 auto;
}
`}
                            />

                            <div className="blog-article-description">
                              <p>
                                That could still touch the edges of a parent
                                container though, so if need to enforce some
                                spacing, we’d probably do that on a parent.
                              </p>
                            </div>
                            {/* <div className="codeimage">
                              <div class="code-block">
                                <div class="code-header">
                                  <span>CSS</span>
                                  <button
                                    class="copy-btn"
                                    aria-label="Copy Code"
                                    onClick={handleCopy}
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="18px"
                                      viewBox="0 0 24 24"
                                      width="18px"
                                      fill="currentColor"
                                    >
                                      <path
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      ></path>
                                      <path
                                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 
               1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
               16H8V7h11v14z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <pre>
                                  <code class="language-css">
                                    <code className="hljs language-css">
                                      <span className="hljs-selector-class">
                                        body
                                      </span>{" "}
                                      {"{"}
                                      <br />
                                      <span className="hljs-attribute">
                                        padding
                                      </span>
                                      :{" "}
                                      <span className="hljs-number">
                                        0 1rem;
                                      </span>{" "}
                                      <br />
                                      {"}"}
                                    </code>
                                  </code>
                                </pre>
                              </div>
                            </div> */}
                            <CodeBlock
                              language="CSS"
                              code={`
body {
  padding: 0 1rem; 
}
`}
                            />
                            <div className="blog-article-description">
                              <p>
                                There is no real problem with that, but we can
                                smash it all into a one-liner now if you’re
                                feeling it:
                              </p>
                            </div>
                            {/* <div className="codeimage">
                              <div class="code-block">
                                <div class="code-header">
                                  <span>CSS</span>
                                  <button
                                    class="copy-btn"
                                    aria-label="Copy Code"
                                    onClick={handleCopy}
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="18px"
                                      viewBox="0 0 24 24"
                                      width="18px"
                                      fill="currentColor"
                                    >
                                      <path
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      ></path>
                                      <path
                                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 
               1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
               16H8V7h11v14z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <pre>
                                  <code class="language-css">
                                    <code className="hljs language-css">
                                      <span className="hljs-selector-class">
                                        .page-wrap
                                      </span>{" "}
                                      {"{"}
                                      <br />
                                      <span className="hljs-attribute">
                                        margin-inline
                                      </span>
                                      :{" "}
                                      <span className="hljs-number">
                                        max(1.5rem, ((100% - 800px) / 2));
                                      </span>
                                      ;
                                      <br />
                                      {"}"}
                                    </code>
                                  </code>
                                </pre>
                              </div>
                            </div> */}
                            <CodeBlock
                              language="CSS"
                              code={`
.page-wrap {
  margin-inline: max(1.5rem, ((100% - 800px) / 2));
}
`}
                            />
                            <div className="blog-article-description">
                              <p>
                                The 1.5rem is the space on the outside (which
                                could be 0), and the 500px is the max-width (or
                                rather max-inline-size as we’re using logical
                                properties here).
                              </p>
                            </div>
                            <div className="datetime"></div>
                            {/* <hr /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* third  */}

                  {/* fourth  */}
                  <div className="article-info-container">
                    <hr />
                    <div className="beat-container">
                      <div className="beat-icon-container">
                        <a href="#" className="beat-icon">
                          CC
                        </a>
                        <a href="#" className="beat-icon-link">
                          <svg
                            class="icon-link"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m39.508 66.75c-1.6016 0-3.1992-0.61328-4.418-1.832-12.207-12.211-12.207-32.074 0-44.281l11.57-11.574c5.9141-5.9141 13.781-9.168 22.145-9.168 8.3633 0 16.227 3.2578 22.137 9.168 5.9141 5.9141 9.1758 13.781 9.1758 22.145s-3.2578 16.227-9.1758 22.137c-2.4453 2.4453-6.3945 2.4453-8.8359 0-2.4453-2.4453-2.4453-6.3984 0-8.8359 3.5508-3.5547 5.5117-8.2812 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-7.1055-7.1055-19.5-7.1055-26.605 0l-11.57 11.57c-7.332 7.3359-7.332 19.27 0 26.605 2.4453 2.4453 2.4453 6.3945 0 8.8359-1.2188 1.2266-2.8203 1.8359-4.418 1.8359zm-8.082 33.137c-8.3633 0-16.227-3.2578-22.137-9.1758-5.9141-5.9062-9.1758-13.773-9.1758-22.137s3.2578-16.227 9.168-22.137c2.4453-2.4453 6.3945-2.4453 8.8359 0 2.4453 2.4453 2.4453 6.3945 0 8.8359-3.5547 3.5508-5.5117 8.2812-5.5117 13.305s1.957 9.75 5.5117 13.301c7.1133 7.1055 19.492 7.1055 26.605 0l10.617-10.617c3.5508-3.5508 5.5117-8.2734 5.5117-13.301 0-5.0234-1.957-9.75-5.5117-13.305-2.4453-2.4375-2.4453-6.3945 0-8.8359 2.4453-2.4453 6.3945-2.4453 8.8359 0 5.9141 5.9141 9.1758 13.773 9.1758 22.145 0 8.3633-3.2578 16.23-9.1758 22.137l-10.617 10.617c-5.9141 5.9141-13.773 9.168-22.137 9.168z"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="beat-content">
                        <div className="auth-container">
                          <div className="auth-info">
                            <div className="article-header-main-container"></div>
                            <div className="blog-article-description">
                              <p>
                                This is like one of those weirdly difficult
                                quizzes about CSS. If you’ve got a element
                                sitting there in a totally normal basic HTML
                                layout, then this CSS:
                              </p>
                            </div>
                            {/* <div className="codeimage">
                              <div class="code-block">
                                <div class="code-header">
                                  <span>CSS</span>
                                  <button
                                    class="copy-btn"
                                    aria-label="Copy Code"
                                    onClick={handleCopy}
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="18px"
                                      viewBox="0 0 24 24"
                                      width="18px"
                                      fill="currentColor"
                                    >
                                      <path
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      ></path>
                                      <path
                                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 
               1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
               16H8V7h11v14z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <pre>
                                  <code class="language-css">
                                    <code className="hljs language-css">
                                      <span className="hljs-selector-class">
                                        html
                                      </span>{" "}
                                      {"{"}
                                      <br />
                                      <span className="hljs-attribute">
                                        max-width
                                      </span>
                                      :{" "}
                                      <span className="hljs-number">800px</span>
                                      ;
                                      <br />
                                      <span className="hljs-attribute">
                                        margin
                                      </span>
                                      : <span className="hljs-number">0</span>{" "}
                                      auto;
                                      <br />
                                      {"}"}
                                      <br />
                                      <span className="hljs-selector-class">
                                        body
                                      </span>{" "}
                                      {"{"}
                                      <br />
                                      <span className="hljs-attribute">
                                        max-width
                                      </span>
                                      :{" "}
                                      <span className="hljs-number">800px</span>
                                      ;
                                      <br />
                                      <span className="hljs-attribute">
                                        margin
                                      </span>
                                      : <span className="hljs-number">0</span>{" "}
                                      auto;
                                      <br />
                                      {"}"}
                                      <br />
                                      <span className="hljs-selector-class">
                                        p
                                      </span>{" "}
                                      {"{"}
                                      <br />
                                      <span className="hljs-attribute">
                                        max-width
                                      </span>
                                      :{" "}
                                      <span className="hljs-number">800px</span>
                                      ;
                                      <br />
                                      <span className="hljs-attribute">
                                        margin
                                      </span>
                                      : <span className="hljs-number">0</span>{" "}
                                      auto;
                                      <br />
                                      {"}"}
                                    </code>
                                  </code>
                                </pre>
                              </div>
                            </div> */}
                            <CodeBlock
                              language="CSS"
                              code={`
html {
  max-width: 800px;
  margin: 0 auto;
}
body {
  max-width: 800px;
  margin: 0 auto;
}
p {
  max-width: 800px;
  margin: 0 auto;
}
`}
                            />

                            <div className="blog-article-description">
                              <p>
                                What color does the render as? <br />
                                <br />{" "}
                                <a href="#" style={{ color: "#e05855" }}>
                                  It's blue
                                </a>
                                . You might think it’s green, as the value blah
                                is an invalid color. If the CSS had…
                              </p>
                            </div>
                            {/* <div className="codeimage">
                              <div class="code-block">
                                <div class="code-header">
                                  <span>CSS</span>
                                  <button
                                    class="copy-btn"
                                    aria-label="Copy Code"
                                    onClick={handleCopy}
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="18px"
                                      viewBox="0 0 24 24"
                                      width="18px"
                                      fill="currentColor"
                                    >
                                      <path
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      ></path>
                                      <path
                                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 
               1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
               16H8V7h11v14z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                                <pre>
                                  <code class="language-css">
                                    <code className="hljs language-css">
                                      <span className="hljs-selector-class">
                                        p
                                      </span>{" "}
                                      {"{"}
                                      <br />
                                      <span className="hljs-attribute">
                                        padding
                                      </span>
                                      :{" "}
                                      <span className="hljs-number">
                                        0 1rem;
                                      </span>{" "}
                                      <br />
                                      {"}"}
                                    </code>
                                  </code>
                                </pre>
                              </div>
                            </div> */}
                            <CodeBlock
                              language="CSS"
                              code={`
p {
  padding: 0 1rem; 
}
`}
                            />
                            <div className="blog-article-description">
                              <p>
                                … then indeed it would be green. But CSS can’t
                                know (in time) that the custom property is
                                invalid, so it falls back to inheritance, which
                                makes it blue from the body.
                              </p>
                            </div>

                            <div className="datetime"></div>
                          </div>
                        </div>
                        <hr className="div" />
                      </div>
                    </div>
                  </div>
                  {/* fourth  */}
                </div>
              </div>
              <div className="right-section-container">
                <div className="article-info-container">
                  <h2 id="sub">SUBSCRIBE</h2>
                </div>
                <div className="blog-article-description">
                  <p>
                    Little boosts of front-end development news, information,
                    and advice — right to your feed reader of choice.
                  </p>
                </div>
                <div className="rsss-btn">
                  <button>
                    <FiRss />
                  </button>
                  <p className="rss-para">RSS</p>
                </div>
                <hr className="black-divider" />
                <div className="article-info-container">
                  <h2 id="sub">WANNA WRITE?</h2>
                </div>
                <div className="blog-article-description">
                  <p>
                    Here's our page on{" "}
                    <a href="#" style={{ color: "#e05855" }}>
                      guest writing
                    </a>
                    . It's a win-win-win!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dollar-amount-main-container">
        <div className="dollar-amount">
          <span className="dollar-sign">$</span>
          839,000
        </div>
        <p className="dollar-para">
          Frontend Masters donates to open source projects through thanks.dev
          and Open Collective, as well as donates to non-profits like The Last
          Mile, Annie Canons, and Vets Who Code.
        </p>
      </section>
    </>
  );
}

export default BlogSectionNavbar;
