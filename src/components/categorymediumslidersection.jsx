// CategoryMediumSliderSection.jsx
import React from "react";
import LatestCategoryMediumSlider from "./slidermediumcard";
import "./css/courseSection.css";

export default function CategoryMediumSliderSection({
  icon,
  title,
  viewMoreText = "View More",
  onViewMore,
  SliderComponent, // <- Slider as a prop
  sliderProps = {}, // <- Slider specific props
}) {
  return (
    <div className="medium-card-slider-header">
      <div className="header-svg-headline">
        <div className="header-svg">{icon}</div>

        <div className="head-line">
          <strong>{title}</strong>
        </div>

        <div
          className="more-text"
          onClick={onViewMore}
          style={{ cursor: onViewMore ? "pointer" : "default" }}
        >
          {viewMoreText}
        </div>
      </div>

      <hr className="course-section-hr" />

      <div className="medium-card-slider-container">
        {SliderComponent && <SliderComponent {...sliderProps} />}
      </div>
    </div>
  );
}
