import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/envelope.svg";


function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="page">
            {/* Main */}
            <div className="main">
                <h1>Co-Innovate Inc.</h1>
                <h2>Innovation Simplified.</h2>
                <p>Making innovation accessible, actionable and sustainable.</p>
                <p>We've done the hard work so you don't have to.</p>
                <p>
                    <strong>Let's Co-Innovate the future!</strong>
                </p>
            </div>
            <hr />

            {/* Who Are We */}
            <div className="section">
                <h2>Who Are We</h2>
                <p>
                    Co-Innovate Inc. is a boutique innovation consultancy that guides mature
                    businesses to co-create tailored innovation operating models that are
                    clearly defined, aligned to your business goals and easily actionable
                    by you and your team.
                </p>
                <p>
                    Our step-by-step approach unlocks internal capacity, embeds innovation
                    skills and processes, and creates repeatable pathways to de-risk new
                    opportunities for growth.
                </p>
                <p>
                    We work side-by-side with industrial and service based clients to build
                    a clear approach to innovation, to be positioned for growth
                    opportunities, and develop the resilience needed to face new external
                    pressures.
                </p>
                <p>
                    We meet you where you are, whether you are just learning about
                    innovation or you have tried several approaches, pilots and idea
                    hackathons, we help you cut the complexity and create clarity.
                </p>
            </div>
            <hr />

            {/* How We Help */}
            <div className="section">
                <h2>How We Help</h2>
                <p>
                    We support your innovation journey from early learning and portfolio
                    building through to commercialization of solutions.
                </p>
                <p>
                    Our services focus on clarity, skill development and repeatable
                    structure to make innovation a sustaining business competency.
                </p>
            </div>
            <hr />

            {/* What We Offer */}
            <div className="section">
                <h2>What We Offer</h2>

                <h3>Innovation Health Check and Assessment</h3>
                <p>
                    We'll work with you to understand your innovation baseline, where you
                    are starting from, what's been tried before and what you are working on
                    now.
                </p>
                <p>
                    It's a simple questionnaire that enables us to work together and
                    co-innovate the future.
                </p>

                <h3>Innovation Definition and Strategy Design</h3>
                <p>
                    Clear steps help to define what's important for your organization and
                    how to get there.
                </p>
                <p>
                    This approach creates clarity about what innovation means for your
                    business context and goals, aligning resource availability with
                    ambition.
                </p>

                <h3>Co-Create Your Innovation Function and Sustaining Operating Model</h3>
                <p>
                    We work with you to build out a simple, functional operating model for
                    innovation.
                </p>
                <p>
                    Similar to other established functions inside your organization such as
                    sales, engineering and finance, you will have a clear structure to
                    execute on innovation.
                </p>

                <h3>Project and Portfolio Review and Development</h3>
                <p>
                    With a clear definition and function ready to execute, we work with you
                    to build your innovation project portfolio to align with the desired
                    innovation outcomes you wish to achieve.
                </p>
                <p>
                    We can also assess any opportunities that already exist in your
                    portfolio.
                </p>

                <h3>Innovation Culture</h3>
                <p>
                    You've probably tried more than once to chase the elusive culture of
                    innovation. We flip the script by helping clients design the necessary
                    inputs to work toward innovation culture as the output.
                </p>
                <p>
                    We believe that culture is how things get done inside your
                    organization. Therefore, it's the intentional design of how innovation
                    gets done that enables talent to be effective, efficient and
                    knowledgeable.
                </p>
                <p>
                    We work with teams to design intentional experiential and applied
                    learning opportunities, create cross-functional engagement and enable
                    continual innovation capacity development.
                </p>
            </div>
            <hr />

            {/* How We Engage */}
            <div className="section">
                <h2>How We Engage</h2>
                <ul>
                    <li>We meet you where you are and support your innovation learning.</li>
                    <li>
                        We create clarity through structure to move from confusing buzzwords
                        to actionable steps.
                    </li>
                    <li>We share proven experience to accelerate your ambitions.</li>
                    <li>
                        We guide you through evidence-based de-risking to scale opportunities
                        for growth.
                    </li>
                </ul>
            </div>
            <hr />

            {/* Meet Your Co-Innovators */}
            <div className="section">
                <h2>Meet Your Co-Innovator</h2>

                <p className="founder-name">Carrie Fanai, P.Eng.</p>
                <p className="founder-title">
                    Founder and CEO, Co-Innovate Inc.
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

                <p>
                    Carrie Fanai is an Innovation Coach and Strategy Consultant who helps
                    leaders turn innovation from a buzzword into a business capability.
                </p>
                <p>
                    Known for her practical, people-first approach, Carrie works
                    side-by-side with leadership teams to co-innovate tailored solutions
                    that align with operational realities, unlock internal capacity and
                    deliver measurable value.
                </p>
                <p>
                    With 25 years of experience in engineering, industrial technology
                    development and corporate innovation, she has built, scaled and
                    de-risked innovation portfolios and partnerships across oil and gas,
                    petrochemicals, agri-food, accelerators and academia.
                </p>
                <p>
                    Carrie turns innovation vision into execution, helping organizations
                    build sustaining, value-generating portfolios and resilient innovation
                    functions.
                </p>
            </div>

            {/* Get Started Button */}
            <div className="get-started">
                <button onClick={() => navigate("/questionnaire")}>Get Started</button>
            </div>

        </div>
    )
}

export default LandingPage