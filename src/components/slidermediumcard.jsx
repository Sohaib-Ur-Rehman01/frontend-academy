import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/courseSection.css";

export default function LatestCategoryMediumSlider({ courses }) {
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
              className="course-medium-card"
              style={{
                backgroundImage: `url(${course.bgImage})`,
              }}
            >
              <div className="course-blur">
                <h3 className="course-name">{course.title}</h3>
                <div className="course-info">
                  <div className="auth-img">
                    <img
                      src={course.authorImg}
                      alt={course.author}
                      className="author-img"
                    />
                  </div>
                  <div className="auth-inf">
                    <h2 className="auth-name">{course.title}</h2>
                    <p className="auth-nick-name">{course.author}</p>
                  </div>
                  <div className="course-icon">
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

// import "./css/courseSection.css";
// import CategorySlider from "./slidersmallcard";
// import { FiSearch } from "react-icons/fi";
// import LatestCategoryMediumSlider from "./slidermediumcard";
// import CategoryMediumSliderSection from "./categorymediumslidersection";
// import { useState } from "react";

// export const CourseHeroSection = () => {
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const latestCoursesMediumCards = [
//     {
//       title: "Java",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },
//     {
//       title: "React",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },
//     {
//       title: "Node js",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },

//     // Add more courses...
//   ];
//   const PopularCoursesMediumCards = [
//     {
//       title: "Javascript",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },
//     {
//       title: "React",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },
//     {
//       title: "Node js",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },

//     // Add more courses...
//   ];
//   const TrendingCoursesMediumCards = [
//     {
//       title: "Frameworks Java",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },
//     {
//       title: "React",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },
//     {
//       title: "Node js",
//       author: "JOSH LONG",
//       bgImage:
//         "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
//       authorImg:
//         "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
//     },

//     // Add more courses...
//   ];
//   const allCourses = [
//     ...latestCoursesMediumCards,
//     ...PopularCoursesMediumCards,
//     ...TrendingCoursesMediumCards,
//   ];

//   // ✅ Filter courses by selectedCategory
//   const filteredCourses = selectedCategory
//     ? allCourses.filter((course) => course.title === selectedCategory.name)
//     : latestCoursesMediumCards;

//   const categories = [
//     {
//       name: "React",
//       img: "https://static.frontendmasters.com/assets/fm/med/topics/react.svg",
//     },
//     {
//       name: "Frameworks",
//       img: "https://static.frontendmasters.com/assets/fm/med/topics/frameworks.svg",
//     },
//     {
//       name: "Full Stack",
//       img: "https://static.frontendmasters.com/assets/fm/med/topics/full-stack.svg",
//     },
//   ];
//   // ///////////////////
//   // ///////////////////
//   return (
//     <>
//       <section className="course-hero-section-main-container">
//         <div className="course-hero-section-banner-main-container">
//           <div className="course-notice-banner">
//             <p>
//               <button>Live Now</button>
//               <a href="#">Api design in Node.js,v5</a> is live is happening Now!
//             </p>
//           </div>
//         </div>
//         <div className="full-stack-courses-main-container">
//           <div className="full-stack-head-line">
//             <div className="headline-div">
//               <h1>Frontend & Full Stack Engineering Courses</h1>
//               <p>
//                 Not Sure Where to start?{" "}
//                 <a href="#">Check our Learning Paths</a>
//               </p>
//             </div>
//           </div>
//           <div className="search-input-all-slider-parent-wrapper">
//             <div className="course-section-search-input">
//               <FiSearch className="search-icon" size={30} />
//               <input
//                 type="text"
//                 placeholder="
// Search for a course, language, framework, or teacher..."
//                 className="course-section-input"
//               />
//             </div>
//             {/* medium card slider logic */}
//             <div className="mini-card-slider">
//               <CategorySlider
//                 selectedCategory={selectedCategory}
//                 onCategorySelect={setSelectedCategory}
//               />
//               {/* ✅ Selected Category Tag */}
//               {selectedCategory ? (
//                 // 👉 Filter Mode UI
//                 <div className="filtered-view">
//                   <div className="selected-category-tag">
//                     <img
//                       src={selectedCategory.img}
//                       alt={selectedCategory.name}
//                     />
//                     <span>{selectedCategory.name}</span>
//                     <button onClick={() => setSelectedCategory(null)}>✕</button>
//                   </div>

//                   <div className="filtered-cards-container">
//                     {filteredCourses.length > 0 ? (
//                       filteredCourses.map((course, idx) => (
//                         <div key={idx} className="course-card">
//                           <img src={course.bgImage} alt={course.title} />
//                           <h3>{course.title}</h3>
//                           <p>{course.author}</p>
//                         </div>
//                       ))
//                     ) : (
//                       <p>No courses available for "{selectedCategory.name}"</p>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 // 👉 Normal UI (all sliders and topics)
//                 <>
//                   {/* Keep your existing slider sections here */}
//                   <CategoryMediumSliderSection
//                     title="Currently Available Courses"
//                     SliderComponent={LatestCategoryMediumSlider}
//                     sliderProps={{
//                       courses: latestCoursesMediumCards,
//                       onCourseSelect: setSelectedCourse,
//                     }}
//                   />
//                   <CategoryMediumSliderSection
//                     title="Popular"
//                     SliderComponent={LatestCategoryMediumSlider}
//                     sliderProps={{
//                       courses: PopularCoursesMediumCards,
//                       onCourseSelect: setSelectedCourse,
//                     }}
//                   />
//                   <CategoryMediumSliderSection
//                     title="Trending Courses"
//                     SliderComponent={LatestCategoryMediumSlider}
//                     sliderProps={{
//                       courses: TrendingCoursesMediumCards,
//                       onCourseSelect: setSelectedCourse,
//                     }}
//                   />
//                   {/* All Topics UI */}
//                   <div className="tutorial-head-line">
//                     <strong>All Topics</strong>
//                   </div>
//                   <hr className="tutorial-course-section-hr" />

//                   <div className="all-topics-tags-main-container">
//                     <div className="topics-container">
//                       {categories.map((cat) => (
//                         <div className="all-category-card">
//                           <img src={cat.img} alt={cat.name} />
//                           <span>{cat.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* medium card slider logic */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
