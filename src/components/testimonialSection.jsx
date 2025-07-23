import "./css/testimonial.css";
export const TestimonialsSection = () => {
  return (
    <>
      <div className="testimonials-section">
        <h2 className="testimonials-heading">What They're Saying About Us</h2>
        <div className="testimonials-wall">
          <div className="testimonial-card">
            <blockquote>
              I'm truly impressed with the quality of the instructors,
              top-notch! Also, the casual tone of the course is great because
              it's suitable for all levels and still keeps your attention
              without being too boring or academic. Everything runs super
              smoothly and the transcriptions are a huge plus – so helpful!
              Loving it all! 🤩
            </blockquote>
            <div className="testimonial-user">
              <img
                src="https://cdn.senja.io/public/media/0fc42059-4a14-45b9-979a-3a7f540d9057_fc777113-0f99-48f0-ad71-301e75fe4b56_1684278076786.jpeg"
                alt="Rita Iglesias Gandara"
              />
              <span>Rita Iglesias Gandara</span>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>
              I take this opportunity to thank Frontend Masters for massively
              shaping my career. If it weren't for them, I doubt if I could be
              where I am today.
            </blockquote>
            <div className="testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Olivine George"
              />
              <span>Olivine George</span>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>
              TBH I owe my entire career to Frontend Masters, content is GOLD,
              usually explained and taught by top notch devs. IMHO worth every
              penny 😃
            </blockquote>
            <div className="testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Robert Borghesi"
              />
              <span>Robert Borghesi</span>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>
              There isn't another place that has the same quality and is
              consistent in quality across all courses as Frontend Masters.
            </blockquote>
            <div className="testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Faurzan"
              />
              <span>Faurzan</span>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>
              I have been promoted to a Senior Frontend Developer! It would be
              wrong not to shout out Frontend Masters, the coursework there
              increased my skills a lot more than I initially thought. I can't
              recommend it enough.
            </blockquote>
            <div className="testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/men/35.jpg"
                alt="Adomas Iutrukis"
              />
              <span>Adomas Iutrukis</span>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>
              Frontend Masters should be in every developer's tool kit.
              <br />
              - Wide range of course topics
              <br />
              - World class teachers
              <br />- Full learning paths to go from zero to hero.
            </blockquote>
            <div className="testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/men/36.jpg"
                alt="Will Thomson"
              />
              <span>Will Thomson</span>
            </div>
          </div>
        </div>
        <button className="show-more-btn">Show More</button>
      </div>
    </>
  );
};
