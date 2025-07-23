import React from "react";
import "./App.css";
import { TopSection } from "./components/topSection";
import { TechSection } from "./components/techSection";
import { VideoSection } from "./components/videoSection";
import { QuizSection } from "./components/quizSection";
import { TestimonialsSection } from "./components/testimonialSection";
import { TeamSection } from "./components/teamSection";
import { CompaniesSection } from "./components/companies";
import { FooterSection } from "./components/footerSection";
function App() {
  return (
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
}

export default App;
