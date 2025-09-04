import React from "react";
import quote from "../assets/quote.svg";
import "./css/teamSection.css";

// ✅ Reusable Testimonial Component
const TestimonialWall = ({ bgColor, testimonials }) => {
  return (
    <div
      className="team-testimonials-wall"
      style={{ backgroundColor: bgColor }}
    >
      {testimonials.map((item, index) => (
        <div className="team-testimonial-card" key={index}>
          <img src={quote} alt="quote" />
          <blockquote style={{ fontSize: "16px" }}>{item.text}</blockquote>
          <div className="team-testimonial-user">
            <img src={item.image} alt={item.name} />
            <div>
              <span className="team-user-name">{item.name}</span>
              <span className="team-user-handle">{item.handle}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialWall;
