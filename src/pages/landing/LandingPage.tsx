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
                    <h3>Build innovation capacity</h3>
                    <p>
                        We partner with mid-market industrial and STEM-focused organizations to build practical
                        innovation capability. Backed by years of hands-on experience leading innovation in complex
                        operating environments, enabling you to diversify revenue and be future-ready.
                    </p>
                </div>

                <hr />
                <div className="section">


                    <h2>The challenge</h2>
                    <ul>
                        <li>Innovation feels important, but lacks urgency</li>
                        <li>Teams are busy and have shifting priorities</li>
                        <li>Ideas exist, but decisions stall</li>
                        <li>You don't need a lab or ping pong tables, you need progress!</li>
                    </ul>

                </div>

                <hr />
                <div className="section">

                    <h2>What we mean by "innovation capacity"</h2>
                    <ul>
                        <li>Clear decision-making on where to innovate, and where not to</li>
                        <li>A simple operating model that employees can actually use</li>
                        <li>Confidence to test ideas without betting the company</li>
                        <li>
                            A repeatable way to adapt as markets, customers, and operating environments change
                        </li>
                    </ul>

                </div>

                <hr />
                <div className="section">

                    <h2>What you can expect</h2>
                    <ul>
                        <li>A partnered approach based on proven experience</li>
                        <li>Tailored operating model with simplified decision making</li>
                        <li>Increased employee engagement</li>
                        <li>Navigate uncertainties to become future-ready</li>
                    </ul>
                </div>

                <hr />
                <div className="section">
                    <h2>Services</h2>
                    <ul>
                        <li>Co-Innovate Consulting - we build it with you</li>
                        <li>Trusted Advisory - we offer private coaching and executive consultation</li>
                        <li>Fractional Executive - hire a fractional innovation leader</li>
                        <li>Speaking Engagements - conferences, off-sites, board retreats, townhalls</li>
                    </ul>


                    <h3>
                     Let's Co-innovate your future!
                    </h3>
                </div>


                <GetStartedSection />
                <hr />

                <FounderSection />


                <div className="logo-banner">
                    <img src={banner2} alt="Co-Innovate secondary banner" />
                </div>
            </div >

            <FloatingGetStartedButton />
        </>
    );
}

export default LandingPage;
