import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LandingPage.css";
import logo from "../assets/logo.png";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle Learn More button click
  const handleLearnMoreClick = () => {
    navigate("/learn-more"); // Navigate to the LearnMorePage route
  };

  // Handle Try Intelligent Symptomate button click
  const handleTryButtonClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Intelligent Symptomate Logo" className="logo" />
          <h1 className="logo-text">Intelligent Symptomate</h1>
        </div>
      </header>
      <main className="main-content">
        <h1 className="main-title">Revolutionizing Healthcare with AI</h1>
        <p className="subtitle">Think, Plan, and Diagnose with Ease.</p>
        <div className="button-container">
          <button className="cta-button" onClick={handleTryButtonClick}>
            Try Intelligent Symptomate
          </button> {/* Add onClick handler for Try button */}
          <button className="learn-more-button" onClick={handleLearnMoreClick}>
            Learn More
          </button> {/* Add onClick handler */}
        </div>
      </main>
      <section className="branding">
        <h2>Welcome to Intelligent Symptomate</h2>
        <p>Your AI-powered health companion for smarter diagnoses and treatments.</p>
      </section>
    </div>
  );
};

export default LandingPage;
