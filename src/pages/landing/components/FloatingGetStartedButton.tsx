import { useNavigate } from "react-router-dom";

function FloatingGetStartedButton() {
  const navigate = useNavigate();

  return (
    <div className="get-started">
      <button onClick={() => navigate("/questionnaire")}>Get Started</button>
    </div>
  );
}

export default FloatingGetStartedButton;
