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
import LearnSection from "./components/learnSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    element: <FeatureSectionNavbar />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
