import { Link } from "react-router-dom";

function FloatingGetStartedButton() {

  return (
    <div className="get-started">
      <Link to="/questionnaire">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default FloatingGetStartedButton;
