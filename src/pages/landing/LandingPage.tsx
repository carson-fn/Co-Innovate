import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/envelope.svg";

import banner1 from "../../assets/banners/banner1.png";
import banner2 from "../../assets/banners/banner2.png"
import carrieProfilePhoto from "../../assets/pictures/carrie-profile-photo.jpeg";


function LandingPage() {
    const navigate = useNavigate()

    return (<>
        <div className="page">
            {/* Main */}
            <div className="main">
                <h1>Co-Innovate Consulting</h1>
                <h2>Innovation, Simplified.</h2>
                <p><strong>Built to work, tailored for operational reality.</strong></p>
                <p>
                    We help established industrial companies strengthen and diversify
                    revenue by turning innovation into a clear, repeatable business
                    capability.
                </p>
                <p>
                    From early leadership alignment through portfolio development and
                    commercialization readiness, we design and embed practical innovation
                    systems that de-risk growth and deliver measurable outcomes.
                </p>
            </div>

            {/* Logo banner */}
            {/* <div className="logo-banner">
                <img src={banner1} alt="Co-Innovate banner" />
            </div> */}

            <hr />

            {/* Problems */}
            <div className="section">
                <h2>The Problems We Solve</h2>
                <p>Most industrial organizations don't struggle with ideas.</p>
                <p>They struggle with making innovation work inside the business.</p>
                <p>We commonly see:</p>
                <ul>
                    <li>Innovation activity without a clear business impact</li>
                    <li>Pilots and technology trials that struggle to scale</li>
                    <li>Confusion about what “innovation” actually means</li>
                    <li>Teams stretched thin, unsure how to prioritize or execute</li>
                    <li>Culture initiatives that don't change how work gets done</li>
                </ul>
                <p>These aren't motivation problems.</p>
                <p><strong>They're system and operating model problems.</strong></p>
            </div>

            <hr />

            {/* Focus */}
            <div className="section">
                <h2>Our Focus</h2>
                <ul>
                    <li>
                        <strong>Clarity</strong> - A shared, practical definition of
                        innovation tied directly to business strategy and growth objectives.
                    </li>
                    <li>
                        <strong>Capability</strong> - Roles, skills, processes, and decision
                        structures required to execute consistently.
                    </li>
                    <li>
                        <strong>Continuity</strong> - A sustaining innovation operating
                        model that survives leadership changes and budget cycles.
                    </li>
                </ul>
                <p>We meet you where you are and build from there.</p>
            </div>

            <hr />

            {/* Why Us */}
            <div className="section">
                <h2>Why Work With Co-Innovate Consulting</h2>
                <ul>
                    <li>
                        <strong>Built for business and industrial realities</strong> -
                        Asset-intensive environments where failure is costly.
                    </li>
                    <li>
                        <strong>Strategy meets operations</strong> - Innovation that actually
                        runs inside your organization.
                    </li>
                    <li>
                        <strong>Practical systems thinking</strong> - Governance, portfolios,
                        and ways of working designed together.
                    </li>
                    <li>
                        <strong>Co-created capabilities</strong> - Built side-by-side with
                        leadership teams to last.
                    </li>
                </ul>
            </div>

            <hr />

            {/* Engagement */}
            <div className="section">
                <h2>How We Engage</h2>
                <ul>
                    <li>Replace buzzwords with actionable structure</li>
                    <li>Share proven experience to accelerate decisions</li>
                    <li>Guide evidence-based de-risking</li>
                    <li>Build capability while delivering real value</li>
                </ul>
            </div>

            <hr />

            {/* Offerings */}
            <div className="section">
                <h2>What We Offer</h2>

                <h3>Innovation Health Check & Assessment</h3>
                <p>
                    A fast assessment of your innovation baseline to establish a clear
                    starting point for leadership.
                </p>

                <h3>Innovation Definition & Strategy Design</h3>
                <p>
                    Aligns ambition, resources, and priorities into a strategy leaders can
                    execute.
                </p>

                <h3>Innovation Function & Sustaining Operating Model</h3>
                <p>
                    A fit-for-purpose operating model with clear roles, governance, and
                    processes.
                </p>

                <h3>Project & Portfolio Review and Development</h3>
                <p>
                    Design and prioritize portfolios aligned to desired outcomes.
                </p>

                <h3>Innovation Culture for Impact</h3>
                <p>
                    We design the systems and inputs that make effective innovation the
                    natural outcome.
                </p>

                <h3>Custom Advisory & Facilitation</h3>
                <p>
                    Targeted support for complex innovation, commercialization, and
                    transformation challenges.
                </p>
            </div>

            <hr />

            {/* Founder */}
            <div className="section">
                <h2>About the Founder</h2>
                <div className="founder-intro">
                    <div className="founder-photo-wrap">
                        <img
                            src={carrieProfilePhoto}
                            alt="Carrie Fanai"
                            className="founder-photo"
                        />
                    </div>
                    <div className="founder-details">
                        <p className="founder-name">Carrie Fanai, P.Eng.</p>
                        <p className="founder-title">
                            Founder & Innovation Strategist, Co-Innovate Consulting
                        </p>
                        <div className="founder-links">
                            <a
                                href="https://www.linkedin.com/in/carriefanai"
                                target="_blank"             // open in new tab
                                rel="noopener noreferrer"   // good security practice
                            >
                                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                            </a>
                            {/* <span className="divider-dot">•</span> */}
                            <a href="mailto:carrie@co-innovate.ca">
                                <img src={emailIcon} alt="Email" className="icon" />
                                {/* carrie@co-innovate.ca */}
                            </a>
                        </div>
                    </div>
                </div>
                <p>
                    Carrie Fanai is an innovation strategist and coach who helps leaders
                    turn innovation into a business capability.
                </p>
                <p>
                    With 25 years of experience across engineering, industrial technology,
                    and corporate innovation, she has built and de-risked portfolios across
                    energy, petrochemicals, agri-food, and academia.
                </p>
                <p>
                    Known for her practical, people-first approach, Carrie designs systems
                    that align with operational realities and deliver measurable value.
                </p>
            </div>



            <hr />

            {/* Get Started */}
            <div className="section">
                <h2>Get Started</h2>
                <p>Ready to make innovation work inside your organization?</p>
                <p>Start with our 5-question form.</p>
                <p><a href="/questionnaire">Link to survey</a></p>

                <p>Book a consultation</p>
                <p><a href="#">Calendly link</a></p>

                <p>Or contact us to discuss your growth objectives.</p>
                <p><a href="/contact">Contact form</a></p>

                <p><strong>Carrie Fanai, P.Eng</strong></p>
                <p>carrie@co-innovate.ca</p>
                <p>www.co-innovate.ca</p>
            </div>

            {/* Second logo banner */}
            <div className="logo-banner">
                <img src={banner2} alt="Co-Innovate secondary banner" />
            </div>
        </div>




        {/* Get Started Button */}
        <div className="get-started">
            <button onClick={() => navigate("/questionnaire")}>Get Started</button>
        </div>
    </>
    )
}

export default LandingPage

