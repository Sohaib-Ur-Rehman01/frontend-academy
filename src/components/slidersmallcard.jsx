import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/courseSection.css";

export default function CategorySlider({ selectedCategory, onCategorySelect }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = [
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Node js",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Java",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
    {
      name: "JavaScript",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/javascript.svg",
    },
    {
      name: "React",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
    },
    {
      name: "Frameworks",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
    },
    {
      name: "Full Stack",
      img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
    },
  ];
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="slider-container">
      {/* Custom Previous Arrow */}
      <button
        className={`slider-arrow prev-arrow ${isBeginning ? "hidden" : ""}`}
        onClick={handlePrev}
        aria-label="Previous"
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
        {categories.map((cat, i) => (
          <SwiperSlide key={i} style={{ width: "auto" }}>
            <div
              className={`category-card ${
                selectedCategory?.name === cat.name ? "active" : ""
              }`}
              onClick={() => onCategorySelect(cat)}
            >
              <img src={cat.img} alt={cat.name} />
              <span>{cat.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Next Arrow */}
      <button
        className={`slider-arrow next-arrow ${isEnd ? "hidden" : ""}`}
        onClick={handleNext}
        aria-label="Next"
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
