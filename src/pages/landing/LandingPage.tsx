// Styles
import "./styles.css";

// Assets
import banner2 from "../../assets/banners/banner2.png";

// Components
import FounderSection from "./components/FounderSection";
import FloatingGetStartedButton from "./components/FloatingGetStartedButton";
import GetStartedSection from "./components/GetStartedSection";
import OfferingsSection from "./components/OfferingsSection";

function LandingPage() {
    return (
        <>
            <div className="page">

                <div className="main">
                    <h1>Co-Innovate Consulting</h1>
                    <h2>Innovation, Simplified.</h2>
                    <p>
                        <strong>Built to work, tailored for operational reality.</strong>
                    </p>
                    <p>
                        We help established industrial companies strengthen and diversify revenue by turning
                        innovation into a <strong>clear, repeatable business capability.</strong>
                    </p>
                    <p>
                        From early leadership alignment through portfolio development and commercialization
                        readiness, we design and embed practical innovation systems that de-risk growth and deliver
                        measurable outcomes.
                    </p>
                </div>

                <hr />

                <div className="section">
                    <h2>The Problems We Solve</h2>

                    <p>
                        Most industrial organizations don't struggle with ideas.<br />
                        They struggle with making innovation work inside the business.
                    </p>

                    <p>We commonly see:</p>
                    <ul>
                        <li>Innovation activity without a clear business impact</li>
                        <li>Pilots and technology trials that struggle to scale</li>
                        <li>Confusion about what "innovation" actually means</li>
                        <li>Teams stretched thin, unsure how to prioritize or execute</li>
                        <li>Culture initiatives that don't change how work gets done</li>
                    </ul>

                    <p>
                        These aren't motivation problems. <br />
                        <strong>They're system and operating model problems.</strong>
                    </p>
                </div>
                <hr />

                <div className="section">
                    <h2>Our Focus</h2>

                    <p>We help leadership teams create:</p>
                    <p>
                        <strong>Clarity</strong><br />
                        A shared, practical definition of innovation tied directly to business strategy and growth objectives.
                    </p>

                    <p><strong>Capability</strong><br />
                        The roles, skills, processes, and decision structures required to execute consistently.
                    </p>

                    <p><strong>Continuity</strong><br />
                        A sustaining innovation operating model that survives leadership changes, budget cycles, and competing priorities.
                    </p>

                    <p><br />We meet you where you are and build from there.</p>

                </div>
                <hr />

                <div className="section">
                    <h2>Why Work With Co-Innovate Consulting</h2>
                    <ul>
                        <li>
                            <strong>Built for business and industrial realities</strong><br />
                            We specialize in asset-intensive and technical operating environments where failure is costly and credibility matters.
                        </li>

                        <li>
                            <strong>Strategy meets operations</strong><br />
                            We go beyond vision and frameworks to design innovation, so it actually runs inside your organization.
                        </li>
                        <li>
                            <strong>Practical systems thinking</strong><br />
                            Innovation succeeds when governance, portfolios, and ways of working are intentionally designed together.
                        </li>
                        <li>
                            <strong>Co-created capabilities</strong><br />
                            We work side-by-side with leadership teams to build solutions tailored to your context with built-in capabilities that last.
                        </li>
                    </ul>
                </div>
                <hr />

                <div className="section">
                    <h2>How We Engage</h2>
                    Our engagements are structured, practical, and outcome-driven.
                    <ul>
                        <li>We create clarity by replacing buzzwords with an actionable structure</li>
                        <li>We share proven experience to accelerate decision-making</li>
                        <li>We guide evidence-based de-risking to scale opportunities for growth</li>
                        <li>We build capability while delivering real value</li>
                    </ul>

                </div>
                <hr />

                <OfferingsSection />
                <hr />

                <FounderSection />
                <hr />

                <GetStartedSection />

                <div className="logo-banner">
                    <img src={banner2} alt="Co-Innovate secondary banner" />
                </div>
            </div>

            <FloatingGetStartedButton />
        </>
    );
}

export default LandingPage;
