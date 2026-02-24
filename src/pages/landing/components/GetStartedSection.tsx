function GetStartedSection() {
  return (
    <div className="section get-started-section">
      <h2>Get Started</h2>
      <p className="get-started-lead">Ready to make innovation work inside your organization?</p>
      <p className="get-started-sublead">Choose your next step:</p>

      <div className="get-started-actions">
        <a className="cta-btn cta-primary" href="/questionnaire">
          Get Started
        </a>
        {/* <a className="cta-btn cta-secondary" href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
          Book a Consultation
        </a> */}
        <a className="cta-btn cta-ghost" href="/contact">
          Contact Us
        </a>
      </div>

      <div className="get-started-contact">
        <p>
          <strong>Carrie Fanai, P.Eng</strong>
        </p>
        <p>
        <a className="get-started-link" href="mailto:carrie@co-innovate.ca">carrie@co-innovate.ca</a> <br/>
        <a className="get-started-link" href="https://www.co-innovate.ca">www.co-innovate.ca</a> <br/>
        <a className="get-started-link" href="tel:403-807-5835">403-807-5835</a>
        </p>
      </div>
    </div>
  );
}

export default GetStartedSection;
