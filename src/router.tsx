import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";

export const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signin", element: <LoginPage /> },
])