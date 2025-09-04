import React from "react";
import "./App.css";
import TopSection from "./components/topSection";
import { TechSection } from "./components/techSection";
import { VideoSection } from "./components/videoSection";
import { QuizSection } from "./components/quizSection";
import { TestimonialsSection } from "./components/testimonialSection";
import { TeamSection } from "./components/teamSection";
import { CompaniesSection } from "./components/companies";
import { FooterSection } from "./components/footerSection";
import { FeatureSectionNavbar } from "./components/featuresSection";
import { FeatureHeroSection } from "./components/featuresSection";
import { QualitySection } from "./components/featuresSection";
import { DemoSection } from "./components/featuresSection";
import { PersonalizedDashboardSection } from "./components/featuresSection";
import { WorkShopSection } from "./components/featuresSection";
import { ProfileSection } from "./components/featuresSection";
import { FeatureCompaniesSection } from "./components/featuresSection";
import { FeatureQuizSection } from "./components/featuresSection";
import AccordionComponent from "./components/accordion";
import Pricinaccordion from "./components/pricingaccordion";
import { LearnHeroSection } from "./components/learnSection";
import { LearningPathSection } from "./components/learnSection";
import { LearningTestimonialSection } from "./components/learnSection";
import { CourseHeroSection } from "./components/courseSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TutorialsSection } from "./components/tutorialsSection";
import BlogSectionNavbar from "./components/blogSection";
import { BlogFooterSection } from "./components/blogfooter";
import PricingSection from "./components/pricingSection";
const Home = () => (
  <>
    <TopSection />
    <TechSection />
    <VideoSection />
    <QuizSection />
    <TestimonialsSection />
    <TeamSection />
    <CompaniesSection />
    <FooterSection />
  </>
);
const Features = () => (
  <>
    <FeatureSectionNavbar />
    <FeatureHeroSection />
    <QualitySection />
    <DemoSection />
    <PersonalizedDashboardSection />
    <WorkShopSection />
    <ProfileSection />
    <FeatureCompaniesSection />
    <FeatureQuizSection />
    <AccordionComponent />
    <FooterSection />
  </>
);
const Learn = () => (
  <>
    <FeatureSectionNavbar />
    <LearnHeroSection />
    <LearningPathSection />
    <FooterSection />
    {/* <LearningTestimonialSection /> */}
  </>
);
const Courses = () => (
  <>
    <FeatureSectionNavbar />
    <CourseHeroSection />
    <FooterSection />
  </>
);
const Tutorials = () => (
  <>
    <FeatureSectionNavbar />
    <TutorialsSection />
    <FooterSection />
  </>
);
const Blog = () => (
  <>
    <BlogSectionNavbar />
    <BlogFooterSection />
  </>
);
const Pricing = () => (
  <>
    <FeatureSectionNavbar />
    <PricingSection />
    <Pricinaccordion />
    <FooterSection />
  </>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/tutorials",
    element: <Tutorials />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
