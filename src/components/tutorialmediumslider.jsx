import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/courseSection.css";

export default function TutorialMediumSliderSection({ courses }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="slider-container">
      {/* Left Arrow */}
      <button
        className={`slider-arrow prev-arrow ${isBeginning ? "hidden" : ""}`}
        onClick={handlePrev}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        className="category-slider"
        onSlideChange={updateNavigation}
        onInit={updateNavigation}
      >
        {courses.map((course, i) => (
          <SwiperSlide key={i} style={{ width: "259px" }}>
            <div
              className="tutorial-course-medium-card"
              style={{
                backgroundImage: `url(${course.bgImage})`,
              }}
            >
              <div className="tutorial-course-blur">
                <div className="content-logo-container">
                  <div className="tutorial-card-content">
                    <div className="tutorial-content">
                      <h3 className="course-name">{course.title}</h3>
                      <p>
                        {course.message} <span>{course.name}</span>
                      </p>
                    </div>
                    <div className="tutorial-course-icon">
                      <svg
                        class="info-icon"
                        data-card-item-anchor=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 16V12m0-4H12.01M22 12c0 5.5228-4.4772 10-10 10C6.47715 22 2 17.5228 2 12 2 6.47715 6.47715 2 12 2c5.5228.0 10 4.47715 10 10z"
                          stroke="currentcolor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow */}
      <button
        className={`slider-arrow next-arrow ${isEnd ? "hidden" : ""}`}
        onClick={handleNext}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
