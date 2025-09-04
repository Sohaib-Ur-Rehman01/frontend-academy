import "./css/teamSection.css";
import TestimonialWall from "./testimonialcardcomponent";
export const TeamSection = () => {
  const testimonialsData = [
    {
      text: "When, without any prompting; your manager offers you a Frontend Masters subscription you know you picked a good place to work 😍",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah O'Brien",
      handle: "sarocodes",
    },
    {
      text: "Frontend Masters I've had a license for at least 4 years now. Got one for all my team when I was a team lead. The content is first class and the price is very cheap especially considering what you would pay to take that workshop in person.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Debbie O'Brien",
      handle: "debs_obrien",
    },
    {
      text: "Our team got a Frontend Masters subscription and it has been super helpful, especially for the new devs on our team who aren't as familiar with frontend technologies. I highly recommend giving them a try. 😊",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Augustus",
      handle: "augburto",
    },
  ];
  return (
    <>
      <div className="team-section">
        <h2 className="team-heading">Upskill Your Software Development Team</h2>
        <h3 className="team-subheading">
          Learn together and apply consistent standards and best practices
          across projects.
        </h3>

        <p className="team-note">
          <i>Save 37% over individual plans with 10 team members or more!</i>
          <p className="team-note-child-p">
            Learn more about our features for Teams and Enterprise
          </p>
        </p>
        <button className="team-btn">Browse Team Plans</button>

        {/* <div className="team-testimonials-wall">
          <div className="team-testimonial-card">
            <img src={quote} alt="" />
            <blockquote>
              When, without any prompting; your manager offers you a Frontend
              Masters subscription you know you picked a good place to work 😍
            </blockquote>
            <div className="team-testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah O'Brien"
              />
              <div>
                <span className="team-user-name">Sarah O'Brien</span>
                <span className="team-user-handle">sarocodes</span>
              </div>
            </div>
          </div>
          <div className="team-testimonial-card">
            <img src={quote} alt="" />

            <blockquote>
              Frontend Masters I've had a license for at least 4 years now. Got
              one for all my team when I was a team lead. The content is first
              class and the price is very cheap especially considering what you
              would pay to take that workshop in person.
            </blockquote>
            <div className="team-testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Debbie O'Brien"
              />
              <div>
                <span className="team-user-name">Debbie O'Brien</span>
                <span className="team-user-handle">debs_obrien</span>
              </div>
            </div>
          </div>
          <div className="team-testimonial-card">
            <img src={quote} alt="" />

            <blockquote>
              Our team got a Frontend Masters subscription and it has been super
              helpful, especially for the new devs on our team who aren't as
              familiar with frontend technologies. I highly recommend giving
              them a try. 😊
            </blockquote>
            <div className="team-testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="Augustus"
              />
              <div>
                <span className="team-user-name">Augustus</span>
                <span className="team-user-handle">augburto</span>
              </div>
            </div>
          </div>
        </div> */}
        <TestimonialWall bgColor="#333333" testimonials={testimonialsData} />
      </div>
    </>
  );
};
