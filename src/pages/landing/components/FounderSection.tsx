import linkedinIcon from "../../../assets/icons/linkedin.svg";
import emailIcon from "../../../assets/icons/envelope.svg";
import carrieProfilePhoto from "../../../assets/pictures/carrie-profile-photo.jpeg";

function FounderSection() {
  return (
    <div className="section">
      <h2>About the Founder</h2>
      <div className="founder-intro">
        <div className="founder-photo-wrap">
          <img src={carrieProfilePhoto} alt="Carrie Fanai" className="founder-photo" />
        </div>
        <div className="founder-details">
          <p className="founder-name">Carrie Fanai, P.Eng.</p>
          <p className="founder-title">Founder & Innovation Strategist, Co-Innovate Consulting</p>
          <div className="founder-links">
            <a href="https://www.linkedin.com/in/carriefanai" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
            <a href="mailto:carrie@co-innovate.ca">
              <img src={emailIcon} alt="Email" className="icon" />
            </a>
          </div>
        </div>
      </div>
      <p>
        Carrie Fanai is an innovation strategist and coach who helps leaders turn innovation into a
        business capability.
      </p>
      <p>
        With 25 years of experience across engineering, industrial technology, and corporate
        innovation, she has built and de-risked portfolios across energy, petrochemicals, agri-food,
        and academia.
      </p>
      <p>
        Known for her practical, people-first approach, Carrie designs systems that align with
        operational realities and deliver measurable value.
      </p>
    </div>
  );
}

export default FounderSection;
