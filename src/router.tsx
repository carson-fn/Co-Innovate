import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import QuestionnairePage from "./pages/questionnaire/QuestionnairePage";
import ContactPage from "./pages/contact/ContactPage";

export const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signin", element: <LoginPage /> },
    { path: "/questionnaire", element: <QuestionnairePage /> },
    { path: "/contact", element: <ContactPage /> },
])