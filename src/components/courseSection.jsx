import "./css/courseSection.css";
import CategorySlider from "./slidersmallcard";
import { FiSearch } from "react-icons/fi";
import LatestCategoryMediumSlider from "./slidermediumcard";
import CategoryMediumSliderSection from "./categorymediumslidersection";
import { useState } from "react";

export const CourseHeroSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const latestCoursesMediumCards = [
    {
      title: "Java",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },
    {
      title: "React",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },
    {
      title: "Node js",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },

    // Add more courses...
  ];
  const PopularCoursesMediumCards = [
    {
      title: "Javascript",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },
    {
      title: "React",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },
    {
      title: "Node js",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },

    // Add more courses...
  ];
  const TrendingCoursesMediumCards = [
    {
      title: "Frameworks",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },
    {
      title: "React",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },
    {
      title: "Node js",
      author: "JOSH LONG",
      bgImage:
        "https://static.frontendmasters.com/assets/courses/2025-07-24-spring-boot/thumb.webp",
      authorImg:
        "https://static.frontendmasters.com/assets/teachers/long/thumb.webp",
    },

    // Add more courses...
  ];
  // const allCourses = [
  //   ...latestCoursesMediumCards,
  //   ...PopularCoursesMediumCards,
  //   ...TrendingCoursesMediumCards,
  // ];

  // ✅ Filter courses by selectedCategory
  const filterCourses = (courses, selectedCategory) => {
    if (!selectedCategory) return courses;
    return courses.filter(
      (course) =>
        course.title.toLowerCase() === selectedCategory.name.toLowerCase()
    );
  };
  const filteredLatest = filterCourses(
    latestCoursesMediumCards,
    selectedCategory
  );
  const filteredPopular = filterCourses(
    PopularCoursesMediumCards,
    selectedCategory
  );
  const filteredTrending = filterCourses(
    TrendingCoursesMediumCards,
    selectedCategory
  );

  const categories = [
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
  // ///////////////////
  // ///////////////////
  return (
    <>
      <section className="course-hero-section-main-container">
        <div className="course-hero-section-banner-main-container">
          <div className="course-notice-banner">
            <p>
              <button>Live Now</button>
              <a href="#">Api design in Node.js,v5</a> is live is happening Now!
            </p>
          </div>
        </div>
        <div className="full-stack-courses-main-container">
          <div className="full-stack-head-line">
            <div className="headline-div">
              <h1>Frontend & Full Stack Engineering Courses</h1>
              <p>
                Not Sure Where to start?{" "}
                <a href="#">Check our Learning Paths</a>
              </p>
            </div>
          </div>
          <div className="search-input-all-slider-parent-wrapper">
            <div className="course-section-search-input">
              <FiSearch className="search-icon" size={30} />
              <input
                type="text"
                placeholder="
Search for a course, language, framework, or teacher..."
                className="course-section-input"
              />
            </div>
            {/* medium card slider logic */}
            <div className="mini-card-slider">
              <CategorySlider
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
              {/* ✅ Selected Category Tag */}
              {selectedCategory && (
                <div className="selected-category-tag">
                  {/* Category image */}
                  <img
                    src={selectedCategory.img}
                    alt={selectedCategory.name}
                    className="selected-category-img"
                  />
                  <span className="selected-category">
                    {selectedCategory.name}
                  </span>
                  <button
                    id="close-btn"
                    onClick={() => setSelectedCategory(null)}
                  >
                    ✕
                  </button>
                </div>
              )}
              <div className="medium-card-slider">
                {filterCourses.length > 0 ? (
                  <>
                    {selectedCategory ? (
                      filteredLatest.length > 0 ? (
                        <CategoryMediumSliderSection
                          title="Currently Available Courses"
                          SliderComponent={LatestCategoryMediumSlider}
                          sliderProps={{
                            courses: filteredLatest,
                            onCourseSelect: (course) =>
                              setSelectedCourse(course),
                          }}
                        />
                      ) : (
                        <p className="no-courses-msg">
                          No search results found for "{selectedCategory.name}"
                          in Currently Available
                        </p>
                      )
                    ) : (
                      // 👉 Jab koi category select nahi hai → normal courses show karo
                      <CategoryMediumSliderSection
                        title="Currently Available Courses"
                        SliderComponent={LatestCategoryMediumSlider}
                        sliderProps={{
                          courses: latestCoursesMediumCards,
                          onCourseSelect: (course) => setSelectedCourse(course),
                        }}
                      />
                    )}
                  </>
                ) : (
                  selectedCategory && (
                    <>
                      <p className="no-courses-msg">
                        No courses available for "{selectedCategory.name}"
                      </p>
                    </>
                  )
                )}
              </div>
            </div>

            {/* medium card slider logic */}

            <div className="medium-card-slider">
              <div className="medium-card-slider-header">
                <div className="medium-card-slider-container">
                  {selectedCategory ? (
                    filteredPopular.length > 0 ? (
                      <CategoryMediumSliderSection
                        title="Popular"
                        SliderComponent={LatestCategoryMediumSlider}
                        sliderProps={{
                          courses: filteredPopular,
                          onCourseSelect: (course) => setSelectedCourse(course),
                        }}
                      />
                    ) : (
                      <p className="no-courses-msg">
                        No search results found for "{selectedCategory.name}" in
                        Popular
                      </p>
                    )
                  ) : (
                    <CategoryMediumSliderSection
                      title="Popular"
                      SliderComponent={LatestCategoryMediumSlider}
                      sliderProps={{
                        courses: PopularCoursesMediumCards,
                        onCourseSelect: (course) => setSelectedCourse(course),
                      }}
                    />
                  )}
                </div>
              </div>
              {/* second row */}
              {selectedCategory ? (
                filteredTrending.length > 0 ? (
                  <CategoryMediumSliderSection
                    title="Trending Courses"
                    SliderComponent={LatestCategoryMediumSlider}
                    sliderProps={{
                      courses: filteredTrending,
                      onCourseSelect: (course) => setSelectedCourse(course),
                    }}
                  />
                ) : (
                  <p className="no-courses-msg">
                    No search results found for "{selectedCategory.name}" in
                    Trending Courses
                  </p>
                )
              ) : (
                <CategoryMediumSliderSection
                  title="Trending Courses"
                  SliderComponent={LatestCategoryMediumSlider}
                  sliderProps={{
                    courses: TrendingCoursesMediumCards,
                    onCourseSelect: (course) => setSelectedCourse(course),
                  }}
                />
              )}
              />
              <div className="tutorial-head-line">
                <strong>All Topics</strong>
              </div>
              <hr className="tutorial-course-section-hr" />
              <div className="all-topics-tags-main-container">
                <div className="topics-container">
                  {categories.map((cat) => (
                    <div className="all-category-card">
                      <img src={cat.img} alt={cat.name} />
                      <span>{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
