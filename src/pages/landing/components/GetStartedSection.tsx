function GetStartedSection() {
  return (
    <div className="section get-started-section">
      <h2>Get Started</h2>
      <p className="get-started-lead">Ready to make innovation work inside your organization?</p>
      <p className="get-started-sublead">Choose your next step:</p>

      <div className="get-started-actions">
        <a className="cta-btn cta-primary" href="/questionnaire">
          Start 5-Question Form
        </a>
        <a className="cta-btn cta-secondary" href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
          Book a Consultation
        </a>
        <a className="cta-btn cta-ghost" href="/contact">
          Contact Us
        </a>
      </div>

      <div className="get-started-contact">
        <p>
          <strong>Carrie Fanai, P.Eng</strong>
        </p>
        <p>carrie@co-innovate.ca</p>
        <p>www.co-innovate.ca</p>
      </div>
    </div>
  );
}

export default GetStartedSection;
